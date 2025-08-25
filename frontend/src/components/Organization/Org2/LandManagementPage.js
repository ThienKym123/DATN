import React, { useEffect, useMemo, useState } from 'react';
import { Card, Table, Button, Input, Select, Space, Tag, message, Drawer, Row, Col, Tabs, List, Typography, Tooltip } from 'antd';
import { SearchOutlined, ReloadOutlined, HistoryOutlined, EyeOutlined, FileTextOutlined } from '@ant-design/icons';
import landService from '../../../services/landService';
import { LAND_USE_PURPOSES, LEGAL_STATUSES } from '../../../services/index';

const { Option } = Select;
const { TabPane } = Tabs;
const { Text } = Typography;

const LandManagementPage = () => {
  const [loading, setLoading] = useState(false);
  const [lands, setLands] = useState([]);
  const defaultFilters = { keyword: '', landUsePurpose: undefined, legalStatus: undefined };
  const [filters, setFilters] = useState(defaultFilters);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [history, setHistory] = useState([]);

  const loadList = async () => {
    try {
      setLoading(true);
      let res = await landService.getAllLandParcels();
      let data = Array.isArray(res) ? res : (res?.data ?? []);
      if (!data || data.length === 0) {
        const sres = await landService.searchLandParcels({ keyword: '' });
        data = Array.isArray(sres) ? sres : (sres?.data ?? []);
      }
      setLands(data);
    } catch (e) {
      message.error(e.message || 'Không tải được danh sách thửa đất');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadList(); }, []);

  const onSearch = async () => {
    try {
      setLoading(true);
      const res = await landService.advancedSearch({
        keyword: filters.keyword,
        landUsePurpose: filters.landUsePurpose,
        legalStatus: filters.legalStatus,
      });
      const data = Array.isArray(res) ? res : (res?.data ?? []);
      setLands(data);
    } catch (e) {
      message.error(e.message || 'Tìm kiếm thất bại');
    } finally {
      setLoading(false);
    }
  };

  const openDetail = async (record) => {
    try {
      setSelected(record);
      setDetailOpen(true);
      const res = await landService.getLandParcelHistory(record.id || record.ID || record.landId);
      setHistory(Array.isArray(res) ? res : (res?.data ?? []));
    } catch (e) {
      setHistory([]);
    }
  };

  const columns = useMemo(() => ([
    {
      title: 'Mã thửa đất',
      dataIndex: 'id',
      key: 'id',
      width: 120,
      fixed: 'left',
      render: (text) => (
        <Text strong style={{ color: '#1890ff' }}>{text}</Text>
      )
    },
    {
      title: 'chủ sử dụng',
      dataIndex: 'ownerId',
      key: 'ownerId',
      width: 140,
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          <Text>{text}</Text>
        </Tooltip>
      )
    },
    {
      title: 'Vị trí',
      dataIndex: 'location',
      key: 'location',
      width: 280,
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          <Text type="secondary" style={{ fontSize: '13px' }}>{text}</Text>
        </Tooltip>
      )
    },
    {
      title: 'Mục đích sử dụng đất',
      dataIndex: 'landUsePurpose',
      key: 'landUsePurpose',
      width: 130,
      align: 'center',
      render: v => (
        <Tag color="blue" style={{ fontWeight: 500 }}>
          {v}
        </Tag>
      )
    },
    {
      title: 'Pháp lý',
      dataIndex: 'legalStatus',
      key: 'legalStatus',
      width: 100,
      align: 'center',
      render: v => (
        <Tag
          color={v === 'LUA' ? 'green' : v === 'HNK' ? 'blue' : v === 'CLN' ? 'orange' : 'default'}
          style={{ fontWeight: 500 }}
        >
          {v}
        </Tag>
      )
    },
    {
      title: 'Diện tích',
      dataIndex: 'area',
      key: 'area',
      width: 110,
      align: 'right',
      render: v => (
        <Text strong style={{ color: '#52c41a' }}>
          {v?.toLocaleString('vi-VN')} m²
        </Text>
      )
    },
    {
      title: 'Thao tác',
      key: 'actions',
      fixed: 'right',
      width: 200,
      align: 'center',
      render: (_, record) => (
        <Space size="small">
          <Button
            type="primary"
            size="small"
            icon={<EyeOutlined />}
            onClick={() => openDetail(record)}
            style={{ borderRadius: '6px' }}
          >
            Chi tiết
          </Button>
          <Button
            size="small"
            icon={<HistoryOutlined />}
            onClick={() => openDetail(record)}
            style={{ borderRadius: '6px' }}
          >
            Lịch sử
          </Button>
        </Space>
      )
    }
  ]), []);

  return (
    <Card
      extra={
        <Space>
          <Input placeholder="Từ khóa" allowClear style={{ width: 220 }} value={filters.keyword} onChange={(e) => setFilters({ ...filters, keyword: e.target.value })} />
          <Select placeholder="Mục đích sử dụng đất" allowClear style={{ width: 200 }} value={filters.landUsePurpose} onChange={(v) => setFilters({ ...filters, landUsePurpose: v })}>
            {Object.entries(LAND_USE_PURPOSES).map(([key, value]) => (
              <Option key={key} value={key}>{key} - {value}</Option>
            ))}
          </Select>
          <Select placeholder="Pháp lý" allowClear style={{ width: 180 }} value={filters.legalStatus} onChange={(v) => setFilters({ ...filters, legalStatus: v })}>
            {Object.entries(LEGAL_STATUSES).map(([key, value]) => (
              <Option key={key} value={key}>{key} - {value}</Option>
            ))}
          </Select>
          <Button icon={<SearchOutlined />} onClick={onSearch}>Tìm kiếm</Button>
          <Button icon={<ReloadOutlined />} onClick={loadList}>Tải lại</Button>
        </Space>
      }
    >
      <Table
        rowKey={(r) => r.id}
        loading={loading}
        dataSource={lands}
        columns={columns}
        scroll={{ x: 1000, y: 600 }}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) => `${range[0]}-${range[1]} của ${total} thửa đất`
        }}
        size="middle"
      />

      {/* Enhanced Detail Drawer */}
      <Drawer
        title={`Chi tiết thửa đất: ${selected?.id}`}
        width={800}
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
      >
        {selected && (
          <Tabs defaultActiveKey="1">
            <TabPane tab="Thông tin cơ bản" key="1">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Text strong>Mã thửa đất:</Text>
                  <br />
                  <Text copyable>{selected.id}</Text>
                </Col>
                <Col span={12}>
                  <Text strong>chủ sử dụng:</Text>
                  <br />
                  <Text copyable>{selected.ownerId}</Text>
                </Col>
                <Col span={24}>
                  <Text strong>Vị trí:</Text>
                  <br />
                  <Text>{selected.location}</Text>
                </Col>
                <Col span={12}>
                  <Text strong>Diện tích:</Text>
                  <br />
                  <Text>{selected.area} m²</Text>
                </Col>
                <Col span={12}>
                  <Text strong>Mục đích sử dụng đất:</Text>
                  <br />
                  <Tag color="blue">{selected.landUsePurpose}</Tag>
                  <Text type="secondary" style={{ marginLeft: 8 }}>
                    {LAND_USE_PURPOSES[selected.landUsePurpose]}
                  </Text>
                </Col>
                <Col span={12}>
                  <Text strong>Tình trạng pháp lý:</Text>
                  <br />
                  <Tag color={selected.legalStatus === 'LUA' ? 'green' : selected.legalStatus === 'HNK' ? 'blue' : 'default'}>
                    {selected.legalStatus}
                  </Tag>
                  <Text type="secondary" style={{ marginLeft: 8 }}>
                    {LEGAL_STATUSES[selected.legalStatus]}
                  </Text>
                </Col>
                <Col span={12}>
                  <Text strong>Mã giấy chứng nhận:</Text>
                  <br />
                  <Text>{selected.certificateId || 'Chưa có'}</Text>
                </Col>
                <Col span={24}>
                  <Text strong>Thông tin pháp lý bổ sung:</Text>
                  <br />
                  <Text>{selected.legalInfo || 'Không có'}</Text>
                </Col>
                <Col span={12}>
                  <Text strong>Ngày tạo:</Text>
                  <br />
                  <Text>{selected.createdAt ? new Date(selected.createdAt).toLocaleString('vi-VN') : 'N/A'}</Text>
                </Col>
                <Col span={12}>
                  <Text strong>Ngày cập nhật:</Text>
                  <br />
                  <Text>{selected.updatedAt ? new Date(selected.updatedAt).toLocaleString('vi-VN') : 'N/A'}</Text>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Tài liệu liên quan" key="2">
              <List
                header={<div><strong>Danh sách tài liệu ({selected.documentIds?.length || 0})</strong></div>}
                bordered
                dataSource={selected.documentIds || []}
                renderItem={(docId, index) => (
                  <List.Item
                    actions={[
                      <Button
                        size="small"
                        icon={<EyeOutlined />}
                        onClick={() => {
                          message.info(`Xem tài liệu: ${docId}`);
                        }}
                      >
                        Xem
                      </Button>
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<FileTextOutlined />}
                      title={`Tài liệu ${index + 1}`}
                      description={`ID: ${docId}`}
                    />
                  </List.Item>
                )}
                locale={{
                  emptyText: 'Chưa có tài liệu nào được liên kết'
                }}
              />
            </TabPane>

            <TabPane tab="Lịch sử thửa đất" key="3">
              <div style={{ marginBottom: 16 }}>
                <Button
                  icon={<HistoryOutlined />}
                  onClick={() => {
                    openDetail(selected);
                  }}
                >
                  Tải lại lịch sử
                </Button>
              </div>
              <List
                header={<div><strong>Lịch sử thay đổi thửa đất ({history.length})</strong></div>}
                bordered
                dataSource={history}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      title={`Thay đổi ${index + 1}`}
                      description={
                        <div>
                          <div><strong>Transaction ID:</strong> {item.txId || 'N/A'}</div>
                          <div><strong>Thời gian:</strong> {item.timestamp ? new Date(item.timestamp.seconds * 1000).toLocaleString('vi-VN') : 'N/A'}</div>
                          <div><strong>Trạng thái:</strong> {item.isDelete ? 'Vô hiệu' : 'Hiệu lực'}</div>
                          {item.land && (
                            <div style={{ marginTop: 8 }}>
                              <div><strong>Diện tích:</strong> {item.land.area} m²</div>
                              <div><strong>Mục đích sử dụng đất:</strong> {item.land.landUsePurpose}</div>
                              <div><strong>Pháp lý:</strong> {item.land.legalStatus}</div>
                            </div>
                          )}
                        </div>
                      }
                    />
                  </List.Item>
                )}
                locale={{
                  emptyText: 'Chưa có lịch sử thay đổi'
                }}
              />
            </TabPane>
          </Tabs>
        )}
      </Drawer>
    </Card>
  );
};

export default LandManagementPage;


