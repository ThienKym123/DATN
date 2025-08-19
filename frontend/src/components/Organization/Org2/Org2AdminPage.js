import React from 'react';
import { Layout, Typography, Tabs, Space, Dropdown, Avatar } from 'antd';
import { SafetyCertificateOutlined, TeamOutlined, ToolOutlined, FileSearchOutlined, UserOutlined } from '@ant-design/icons';
import authService from '../../../services/auth';

import AdminAccountPage from '../../Admin/AdminAccountPage';
import SystemConfigPage from '../../Admin/SystemConfigPage';
import LogsPage from '../../Admin/LogsPage';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const Org2AdminPage = ({ onLogout }) => {
  const currentUser = authService.getCurrentUser();

  const items = [
    {
      key: 'accounts',
      label: (
        <Space>
          <TeamOutlined />
          <span>Quản lý tài khoản</span>
        </Space>
      ),
      children: <AdminAccountPage />,
    },
    {
      key: 'system-configs',
      label: (
        <Space>
          <ToolOutlined />
          <span>Thiết lập hệ thống</span>
        </Space>
      ),
      children: <SystemConfigPage />,
    },
    {
      key: 'logs',
      label: (
        <Space>
          <FileSearchOutlined />
          <span>Logs hệ thống</span>
        </Space>
      ),
      children: <LogsPage />,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          background: '#fff',
          padding: '0 24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SafetyCertificateOutlined style={{ fontSize: 24, color: '#722ed1', marginRight: 12 }} />
          <Title level={3} style={{ margin: 0, color: '#722ed1' }}>
            Admin - Văn phòng Công chứng
          </Title>
        </div>
        <Dropdown
          menu={{
            items: [
              { key: 'profile-header', disabled: true, label: (
                <div style={{ padding: '4px 8px' }}>
                  <div style={{ fontWeight: 600, color: '#1f1f1f' }}>{currentUser?.name || 'Admin'}</div>
                  <div style={{ fontSize: 12, color: '#595959' }}>Org: {currentUser?.org}</div>
                </div>
              ) },
              { type: 'divider' },
              { key: 'profile', label: 'Quản lý hồ sơ' },
              { key: 'logout', label: 'Đăng xuất' }
            ],
            onClick: ({ key }) => {
              if (key === 'profile') window.location.assign('/profile');
              if (key === 'logout') { try { onLogout?.(); } catch (_) {} window.location.assign('/login'); }
            }
          }}
          trigger={['click']}
          placement="bottomRight"
        >
          <Avatar style={{ backgroundColor: '#722ed1', cursor: 'pointer', color: '#fff' }} icon={<UserOutlined />} />
        </Dropdown>
      </Header>

      <Content style={{ margin: 24 }}>
        <div style={{ background: '#fff', padding: 16, borderRadius: 8 }}>
          <div style={{ marginBottom: 12 }}>
            <Text type="secondary">Quản trị hệ thống cho tổ chức Org2</Text>
          </div>
          <Tabs items={items} destroyOnHide />
        </div>
      </Content>
    </Layout>
  );
};

export default Org2AdminPage;


