// Sidebar.js
import React, { useState, useEffect } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, MenuOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Popover } from 'antd';
import './Sidebar.css'; // Import custom CSS for styling

const { Sider, Header, Content } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKeys, setSelectedKeys] = useState(['1']);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuSelect = ({ key }) => setSelectedKeys([key]);

  const handleMouseEnter = () => setCollapsed(false);
  const handleMouseLeave = () => setCollapsed(true);

  const handleIconClick = (key) => {
    if (collapsed) {
      setSelectedKeys([key]);
    }
  };

  const handleMenuToggle = () => setCollapsed(!collapsed);

  const Items = [
    { key: '1', icon: <UserOutlined />, content: 'User Profile' },
    { key: '2', icon: <VideoCameraOutlined />, content: 'Video' },
    { key: '3', icon: <UploadOutlined />, content: 'Upload' }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isMobile ? (
        <>
          <Button type="primary" icon={<MenuOutlined />} style={{ position: 'fixed', top: 16, left: 16, zIndex: 1 }} onClick={handleMenuToggle} />
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{ background: 'white', textAlign: 'center', boxShadow: '2px 0 6px rgba(0, 21, 41, 0.08)' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={collapsed ? 'sider-collapsed' : ''} // Add class based on collapsed state
          >
            <div style={{ padding: '16px 0', fontWeight: 'bold', fontSize: '24px', color: 'black' }}>
              {collapsed ? 'C' : 'CropGen'}
            </div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} onSelect={handleMenuSelect} selectedKeys={selectedKeys} style={{ background: 'white', borderRight: 'none' }}>
              {Items.map(item => (
                <Menu.Item key={item.key} style={{ background: 'none', borderBottom: 'none' }} onMouseEnter={() => handleIconClick(item.key)}>
                  <Popover placement="right" content={item.content} trigger="hover">
                    <span className={`icon ${selectedKeys[0] === item.key ? 'selected' : ''}`}>{item.icon}</span>
                  </Popover>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
        </>
      ) : (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          onCollapse={(collapsed, type) => { if (type === 'clickTrigger') setCollapsed(collapsed); }}
          style={{ background: 'white', textAlign: 'center', boxShadow: '2px 0 6px rgba(0, 21, 41, 0.08)' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={collapsed ? 'sider-collapsed' : ''} // Add class based on collapsed state
        >
          <div style={{ padding: '16px 0', fontWeight: 'bold', fontSize: '24px', color: 'black' }}>
            {collapsed ? 'C' : 'CropGen'}
          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} onSelect={handleMenuSelect} selectedKeys={selectedKeys} style={{ background: 'white', borderRight: 'none' }}>
            {Items.map(item => (
              <Popover placement="right" title={null} content={item.content} trigger="hover" key={item.key}>
                <Menu.Item key={item.key} style={{ background: 'none', borderBottom: 'none' }} onMouseEnter={() => handleIconClick(item.key)}>
                  <span className={`icon ${selectedKeys[0] === item.key ? 'selected' : ''}`}>{item.icon}</span>
                </Menu.Item>
              </Popover>
            ))}
          </Menu>
        </Sider>
      )}
      <Layout>
        <Header style={{ background: 'white', paddingLeft: 16, boxShadow: '0 2px 4px rgba(0, 21, 41, 0.08)' }} />
        <Content style={{ margin: '24px 16px', padding: 24, background: 'white', boxShadow: '0 2px 4px rgba(0, 21, 41, 0.08)' }}>Maps Data</Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
