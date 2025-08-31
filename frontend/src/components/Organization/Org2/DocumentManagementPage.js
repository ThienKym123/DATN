import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Card, Table, Button, Modal, Form, Input, Select, Space, Tag, message, Row, Col, Tooltip, Upload, Progress, Divider, Typography } from 'antd';
import { EditOutlined, SearchOutlined, ReloadOutlined, DeleteOutlined, DownloadOutlined, UploadOutlined, FileTextOutlined, CloudUploadOutlined } from '@ant-design/icons';
import documentService from '../../../services/documentService';
import ipfsService from '../../../services/ipfs';
import landService from '../../../services/landService';
import landTypeMatchService from '../../../services/landTypeMatchService';
import OnlineDocumentViewer from '../../Common/OnlineDocumentViewer';
import { useAuth } from '../../../hooks/useAuth';
import DocumentDetailModal from '../../Common/DocumentDetailModal'; // Import the component
const { confirm } = Modal;
const { Option } = Select;
const { TextArea } = Input;
const { Text } = Typography;

const DocumentManagementPage = () => {
  const { user } = useAuth();
  const [selected, setSelected] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false); // Add detailOpen state
  const [editOpen, setEditOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [filters, setFilters] = useState({
    keyword: '',
    docType: undefined,
    verified: undefined,
  });
  const [createOpen, setCreateOpen] = useState(false);
  const [editForm] = Form.useForm();
  const [form] = Form.useForm();
  const [analysis, setAnalysis] = useState(null);
  const [documentHistory, setDocumentHistory] = useState([]);
  const [blockchainData, setBlockchainData] = useState(null);
  const [comparisonResult, setComparisonResult] = useState(null);
  const [onlineViewerOpen, setOnlineViewerOpen] = useState(false);

  const loadList = useCallback(async () => {
    try {
      setLoading(true);
      const docs = await documentService.getAllDocumentsWithMetadata();
      setDocuments(docs);
    } catch (e) {
      message.error(e.message || 'Lỗi khi tải danh sách tài liệu');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadList();
    const handleDocumentCreated = () => {
      console.log('Document created event received, refreshing list...');
      loadList();
    };
    const handleDocumentUpdated = () => {
      console.log('Document updated event received, refreshing list...');
      loadList();
    };
    const handleDocumentDeleted = () => {
      console.log('Document deleted event received, refreshing list...');
      loadList();
    };
    window.addEventListener('documentCreated', handleDocumentCreated);
    window.addEventListener('documentUpdated', handleDocumentUpdated);
    window.addEventListener('documentDeleted', handleDocumentDeleted);
    return () => {
      window.removeEventListener('documentCreated', handleDocumentCreated);
      window.removeEventListener('documentUpdated', handleDocumentUpdated);
      window.removeEventListener('documentDeleted', handleDocumentDeleted);
    };
  }, [loadList]);

  const onSearch = async () => {
    try {
      setLoading(true);
      const searchParams = {};
      if (filters.keyword) searchParams.keyword = filters.keyword;
      if (filters.docType) searchParams.type = filters.docType;
      if (filters.verified !== undefined) searchParams.verified = filters.verified;
      const docs = await documentService.searchDocuments(searchParams);
      const documentsArray = Array.isArray(docs) ? docs : (docs.documents || []);
      console.log('Search results:', documentsArray);
      if (!documentsArray || documentsArray.length === 0) {
        message.info('Không tìm thấy tài liệu nào');
        setDocuments([]);
      } else {
        setDocuments(documentsArray);
      }
    } catch (e) {
      message.error(e.message || 'Lỗi khi tìm kiếm');
    } finally {
      setLoading(false);
    }
  };

  const onCreate = async () => {
    try {
      const values = await form.validateFields();
      if (!selectedFile) {
        message.error('Vui lòng chọn file');
        return;
      }
      setUploading(true);
      setUploadProgress(0);
      const docID = values.docID;
      const ipfsHash = await ipfsService.uploadFileToIPFS(selectedFile, (progress) => setUploadProgress(progress));
      await documentService.createDocument({
        docID,
        docType: values.docType,
        title: values.title,
        description: values.description,
        ipfsHash,
        fileType: selectedFile.type || selectedFile.name.split('.').pop().toUpperCase(),
        fileSize: selectedFile.size,
        status: 'PENDING',
      });
      message.success('Tạo tài liệu thành công');
      setCreateOpen(false);
      form.resetFields();
      setSelectedFile(null);
      setFileList([]);
      loadList();
      window.dispatchEvent(new CustomEvent('documentCreated', { detail: { documentId: docID } }));
    } catch (e) {
      message.error(e.message || 'Tạo tài liệu thất bại');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const onEdit = async () => {
    try {
      const values = await editForm.validateFields();
      setLoading(true);
      await documentService.updateDocument(selected.docID, {
        title: values.title,
        description: values.description,
      });
      message.success('Cập nhật tài liệu thành công');
      setEditOpen(false);
      loadList();
      window.dispatchEvent(new CustomEvent('documentUpdated', { detail: { documentId: selected.docID } }));
    } catch (e) {
      message.error(e.message || 'Cập nhật thất bại');
    } finally {
      setLoading(false);
    }
  };

  const onAnalyze = async (docID) => {
    try {
      setLoading(true);
      const result = await documentService.analyzeDocument(docID);
      if (result.success && result.data && result.data.analysis) {
        const analysisData = result.data.analysis;
        setAnalysis(analysisData);
        await performBlockchainComparison(analysisData);
        message.success('Phân tích và so sánh tài liệu hoàn tất');
      } else {
        throw new Error('Dữ liệu phân tích không hợp lệ');
      }
    } catch (e) {
      message.error(e.message || 'Phân tích thất bại');
    } finally {
      setLoading(false);
    }
  };

  const performBlockchainComparison = async (analysisData) => {
    if (!analysisData || !analysisData.extractedInfo) {
      throw new Error('Dữ liệu phân tích không hợp lệ');
    }
    try {
      console.log('Starting blockchain comparison...');
      const landID = analysisData.extractedInfo.landParcelID;
      console.log('Querying land with ID:', landID);
      if (!landID) {
        throw new Error('Không tìm thấy LandID trong tài liệu');
      }
      const landInfo = await landService.getLandParcel(landID);
      console.log('Land info from blockchain:', landInfo);
      if (!landInfo) {
        throw new Error(`Không tìm thấy thông tin thửa đất ${landID} trên blockchain`);
      }
      const blockchainDataObj = {
        landID,
        landType: landInfo?.landUsePurpose || landInfo?.purpose || 'Không tìm thấy',
        legalStatus: landInfo?.legalStatus || 'Không tìm thấy',
        area: landInfo?.area || landInfo?.landArea || 'Không tìm thấy',
        location: landInfo?.location || landInfo?.address || 'Không tìm thấy',
        cccd: landInfo?.ownerID || landInfo?.ownerId || 'Không tìm thấy',
      };
      console.log('Blockchain data object:', blockchainDataObj);
      setBlockchainData(blockchainDataObj);
      const result = calculateMatch(analysisData.extractedInfo, blockchainDataObj);
      console.log('Match result:', result);
      setComparisonResult(result);
    } catch (e) {
      console.error('Error in performBlockchainComparison:', e);
      throw e;
    }
  };

  const calculateMatch = (extracted, blockchain) => {
    const fields = [
      { name: 'LandID', extracted: extracted.landParcelID, blockchain: blockchain.landID, weight: 4, type: 'exact' },
      { name: 'Loại đất', extracted: extracted.landType, blockchain: blockchain.landType, weight: 3, type: 'landType' },
      { name: 'Diện tích', extracted: extracted.landArea, blockchain: blockchain.area, weight: 2, type: 'number' },
      { name: 'Địa chỉ', extracted: extracted.landLocation, blockchain: blockchain.location, weight: 2, type: 'location' },
      { name: 'CCCD', extracted: extracted.cccd, blockchain: blockchain.cccd, weight: 3, type: 'exact' },
    ];
    let totalScore = 0;
    let maxScore = 0;
    let matchedFields = 0;
    const details = [];
    fields.forEach((field) => {
      maxScore += field.weight;
      if (!field.extracted || !field.blockchain) {
        details.push(`⚠️ ${field.name}: Thiếu thông tin`);
        return;
      }
      let isMatch = false;
      switch (field.type) {
        case 'exact':
          isMatch = field.extracted.toString().toLowerCase() === field.blockchain.toString().toLowerCase();
          break;
        case 'landType':
          isMatch = landTypeMatchService.isMatch(field.blockchain, field.extracted);
          break;
        case 'number':
          const extractedNum = parseFloat(field.extracted);
          const blockchainNum = parseFloat(field.blockchain);
          if (!isNaN(extractedNum) && !isNaN(blockchainNum)) {
            const diff = Math.abs(extractedNum - blockchainNum);
            const tolerance = Math.max(extractedNum, blockchainNum) * 0.05;
            isMatch = diff <= tolerance;
          }
          break;
        case 'location':
          const extractedLoc = field.extracted.toString().toLowerCase();
          const blockchainLoc = field.blockchain.toString().toLowerCase();
          isMatch =
            extractedLoc.includes(blockchainLoc) ||
            blockchainLoc.includes(extractedLoc) ||
            extractedLoc === blockchainLoc;
          break;
        default:
          isMatch = field.extracted.toString().toLowerCase() === field.blockchain.toString().toLowerCase();
      }
      if (isMatch) {
        totalScore += field.weight;
        matchedFields++;
        details.push(`✅ ${field.name}: Khớp (${field.extracted})`);
      } else {
        details.push(`❌ ${field.name}: Không khớp (Tài liệu: ${field.extracted}, Blockchain: ${field.blockchain})`);
      }
    });
    const matchPercentage = Math.round((totalScore / maxScore) * 100);
    let recommendation = 'review';
    if (matchPercentage >= 80) {
      recommendation = 'verify';
    } else if (matchPercentage <= 30) {
      recommendation = 'reject';
    }
    return {
      matchPercentage,
      matchedFields,
      totalFields: fields.length,
      recommendation,
      details,
    };
  };

  const loadDocumentHistory = useCallback(async (docID) => {
    try {
      if (!docID) return;
      const history = await documentService.getDocumentHistory(docID);
      setDocumentHistory(history);
    } catch (e) {
      console.error('Error loading document history:', e);
      setDocumentHistory([]);
    }
  }, []);

  const handleDownload = useCallback(async (record) => {
    try {
      if (!record.ipfsHash) {
        message.error('Không có file để tải');
        return;
      }
      await ipfsService.downloadFileFromIPFS(record.ipfsHash, record.title || 'document');
      message.success('Tải file thành công');
    } catch (e) {
      message.error(e.message || 'Tải file thất bại');
    }
  }, []);

  const handleFileChange = (info) => {
    const { fileList: newFileList } = info;
    if (newFileList.length === 0) {
      setSelectedFile(null);
      setFileList([]);
      return;
    }
    const file = info.file.originFileObj || info.file;
    if (file) {
      setSelectedFile(file);
      setFileList(newFileList);
    }
  };

  const handleDelete = useCallback(
    (record) => {
      confirm({
        title: 'Xác nhận xóa tài liệu',
        content: (
          <div>
            <p>Bạn có chắc chắn muốn xóa tài liệu này không?</p>
            <p>
              <strong>Mã tài liệu:</strong> {record.docID}
            </p>
            <p>
              <strong>Tiêu đề:</strong> {record.title}
            </p>
            <p style={{ color: 'red', marginTop: 10 }}>⚠️ Hành động này không thể hoàn tác!</p>
          </div>
        ),
        okText: 'Xóa',
        okType: 'danger',
        cancelText: 'Hủy',
        async onOk() {
          try {
            await documentService.deleteDocument(record.docID);
            message.success('Xóa tài liệu thành công');
            loadList();
            window.dispatchEvent(new CustomEvent('documentDeleted', { detail: { documentId: record.docID } }));
          } catch (e) {
            message.error(e.message || 'Xóa thất bại');
          }
        },
        onCancel() {
          console.log('Hủy xóa tài liệu');
        },
      });
    },
    [loadList]
  );

  const openDetail = useCallback(
    (record) => {
      setSelected(record);
      setDetailOpen(true);
      if (record.docID) {
        loadDocumentHistory(record.docID);
      }
    },
    [loadDocumentHistory]
  );

  const columns = useMemo(
    () => [
      { title: 'Mã tài liệu', dataIndex: 'docID', key: 'docID', render: (v) => <code>{v}</code> },
      { title: 'Tiêu đề', dataIndex: 'title', key: 'title' },
      { title: 'Loại', dataIndex: 'type', key: 'type', render: (v) => <Tag color='blue'>{v}</Tag> },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (v) => {
          if (v === 'VERIFIED') return <Tag color='green'>Đã xác thực</Tag>;
          if (v === 'REJECTED') return <Tag color='red'>Không hợp lệ</Tag>;
          return <Tag color='orange'>Chờ xác thực</Tag>;
        },
      },
      { title: 'Loại file', dataIndex: 'fileType', key: 'fileType', render: (v) => <Tag color='blue'>{documentService.getDisplayFileType(v)}</Tag> },
      { title: 'Kích thước', dataIndex: 'fileSize', key: 'fileSize', render: (v) => (v ? `${(v / 1024).toFixed(2)} KB` : 'N/A') },
      { title: 'Người upload', dataIndex: 'uploadedBy', key: 'uploadedBy' },
      {
        title: 'Thao tác',
        key: 'actions',
        fixed: 'right',
        render: (_, record) => (
          <Space>
            <Tooltip title='Tải về'>
              <Button icon={<DownloadOutlined />} onClick={() => handleDownload(record)} />
            </Tooltip>
            <Tooltip title='Xem chi tiết'>
              <Button icon={<FileTextOutlined />} onClick={() => openDetail(record)} />
            </Tooltip>
            <Tooltip title={record.uploadedBy !== user?.userId ? 'Chỉ người upload mới được sửa' : 'Sửa'}>
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setSelected(record);
                  editForm.setFieldsValue({
                    title: record.title,
                    description: record.description,
                  });
                  setEditOpen(true);
                }}
                disabled={record.uploadedBy !== user?.userId}
              />
            </Tooltip>
            <Tooltip title={record.uploadedBy !== user?.userId ? 'Chỉ người upload mới được xóa' : 'Xóa'}>
              <Button
                icon={<DeleteOutlined />}
                danger
                onClick={() => handleDelete(record)}
                disabled={record.uploadedBy !== user?.userId}
              />
            </Tooltip>
          </Space>
        ),
      },
    ],
    [editForm, handleDelete, handleDownload, openDetail, user?.userId]
  );

  return (
    <Card
      title='Quản lý tài liệu (Org2)'
      extra={
        <Space>
          <Input
            placeholder='Từ khóa'
            allowClear
            style={{ width: 200 }}
            value={filters.keyword}
            onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
          />
          <Select
            placeholder='Loại tài liệu'
            allowClear
            style={{ width: 150 }}
            value={filters.docType}
            onChange={(v) => setFilters({ ...filters, docType: v })}
          >
            <Option value='CERTIFICATE'>Giấy chứng nhận</Option>
            <Option value='CONTRACT'>Hợp đồng</Option>
            <Option value='REPORT'>Báo cáo</Option>
            <Option value='OTHER'>Khác</Option>
          </Select>
          <Select
            placeholder='Trạng thái xác thực'
            allowClear
            style={{ width: 150 }}
            value={filters.verified}
            onChange={(v) => setFilters({ ...filters, verified: v })}
          >
            <Option value={true}>Đã xác thực</Option>
            <Option value={false}>Chờ xác thực</Option>
          </Select>
          <Button icon={<SearchOutlined />} onClick={onSearch}>
            Tìm kiếm
          </Button>
          <Button icon={<ReloadOutlined />} onClick={loadList}>
            Tải lại
          </Button>
          <Button type='primary' icon={<CloudUploadOutlined />} onClick={() => setCreateOpen(true)}>
            Upload tài liệu
          </Button>
        </Space>
      }
    >
      <Table
        rowKey={(r) => r.docID}
        loading={loading}
        dataSource={documents}
        columns={columns}
        scroll={{ x: 1200 }}
        pagination={{ pageSize: 10, showSizeChanger: true }}
        locale={{
          emptyText: (
            <div style={{ padding: '40px 0' }}>
              <div style={{ fontSize: '16px', color: '#595959', marginBottom: '8px' }}>
                Chưa có tài liệu nào cần xác thực
              </div>
              <div style={{ fontSize: '14px', color: '#8c8c8c' }}>
                Các tài liệu được upload sẽ hiển thị ở đây để bạn xác thực
              </div>
            </div>
          ),
        }}
      />
      {/* Create Document */}
      <Modal
        title='Tạo tài liệu mới'
        open={createOpen}
        onOk={onCreate}
        onCancel={() => setCreateOpen(false)}
        confirmLoading={uploading}
        width={720}
      >
        <Form layout='vertical' form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name='docID' label='Mã tài liệu' rules={[{ required: true, message: 'Bắt buộc' }]}>
                <Input placeholder='Nhập mã tài liệu' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='title' label='Tiêu đề' rules={[{ required: true, message: 'Bắt buộc' }]}>
                <Input placeholder='Nhập tiêu đề tài liệu' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name='docType' label='Loại tài liệu' rules={[{ required: true, message: 'Bắt buộc' }]}>
                <Select placeholder='Chọn loại'>
                  <Option value='CERTIFICATE'>Giấy chứng nhận</Option>
                  <Option value='CONTRACT'>Hợp đồng</Option>
                  <Option value='REPORT'>Báo cáo</Option>
                  <Option value='OTHER'>Khác</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name='description' label='Mô tả'>
            <TextArea rows={4} placeholder='Nhập mô tả tài liệu' />
          </Form.Item>
          <Divider>Upload file lên IPFS</Divider>
          <Form.Item label='Chọn file' required>
            <Upload
              fileList={fileList}
              onChange={handleFileChange}
              beforeUpload={() => false}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Chọn file</Button>
            </Upload>
            <div style={{ marginTop: 8, fontSize: '12px', color: '#666' }}>
              Hỗ trợ: PDF, DOC, DOCX, JPG, PNG. Kích thước tối đa: 50MB
            </div>
          </Form.Item>
          {uploading && (
            <div>
              <Progress percent={uploadProgress} status='active' />
              <Text type='secondary'>Đang upload lên IPFS...</Text>
            </div>
          )}
        </Form>
      </Modal>
      {/* Edit Document */}
      <Modal
        title='Sửa tài liệu'
        open={editOpen}
        onOk={onEdit}
        onCancel={() => setEditOpen(false)}
        confirmLoading={loading}
        width={640}
      >
        <Form layout='vertical' form={editForm}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name='title' label='Tiêu đề' rules={[{ required: true, message: 'Bắt buộc' }]}>
                <Input placeholder='Nhập tiêu đề tài liệu' />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name='description' label='Mô tả'>
            <TextArea rows={4} placeholder='Nhập mô tả tài liệu' />
          </Form.Item>
          <div
            style={{
              background: '#fff7e6',
              border: '1px solid #ffd591',
              borderRadius: '6px',
              padding: '12px',
              marginTop: '16px',
            }}
          >
            <Text type='warning' style={{ fontSize: '12px' }}>
              💡 Lưu ý: Chỉ có thể cập nhật tiêu đề và mô tả. Loại tài liệu không thể thay đổi sau khi tạo.
            </Text>
          </div>
        </Form>
      </Modal>
      {/* Detail + Analysis */}
      <DocumentDetailModal
        visible={detailOpen}
        document={selected}
        onClose={() => setDetailOpen(false)}
        onVerify={async (docID, notes) => {
          await documentService.verifyDocument(docID, notes);
          const updatedDocument = {
            ...selected,
            status: 'VERIFIED',
            verifiedBy: user?.userId || 'N/A',
            verifiedAt: new Date().toISOString(),
          };
          setSelected(updatedDocument);
          loadList();
        }}
        onReject={async (docID, reason) => {
          await documentService.rejectDocument(docID, reason);
          const updatedDocument = {
            ...selected,
            status: 'REJECTED',
            verifiedBy: user?.userId || 'N/A',
            verifiedAt: new Date().toISOString(),
          };
          setSelected(updatedDocument);
          loadList();
        }}
        onPreview={() => setOnlineViewerOpen(true)}
        userRole='Org2'
        onAnalyze={onAnalyze}
        analysis={analysis}
        blockchainData={blockchainData}
        comparisonResult={comparisonResult}
        documentHistory={documentHistory}
        loadDocumentHistory={loadDocumentHistory}
      />
      {/* Online Document Viewer */}
      <OnlineDocumentViewer
        visible={onlineViewerOpen}
        onCancel={() => setOnlineViewerOpen(false)}
        document={selected}
      />
    </Card>
  );
};

export default DocumentManagementPage;