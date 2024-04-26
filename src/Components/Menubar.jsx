// Sidebar.jsx

import React, { useState, useEffect } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, MenuOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Popover } from 'antd';

const { Sider, Header, Content } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true); 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => setCollapsed(!collapsed);

  const handleSidebarHover = () => {
    if (!isMobile) {
      setCollapsed(!collapsed);
    }
  };

  const profilePopoverContent = (
    <>
      <Button type="text" block>Crop Analytics</Button>
      <Button type="text" block>Add crop</Button>
      <Button type="text" block>Crop Advisory</Button>
      <Button type="text" block>Form Manager</Button>
      <Button type="text" block>Crop Information</Button>
      <Button type="text" block>Disease Detection</Button>
      <Button type="text" block>Weather Information</Button>
    </>
  );

  const randomTextPopoverContent = (
    <>
      <p>Random Text 1</p>
      <p>Random Text 2</p>
      <p>Random Text 3</p>
    </>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isMobile && (
        <>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            className="sidebar"
            theme='light'
          >
            <div className="logo">
              {collapsed ? 'C' : 'CropGen'}
            </div>
            <Menu mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Popover 
                  content={profilePopoverContent} 
                  title="Profile" 
                  placement="right" 
                  overlayStyle={{ width: 200 }} // Adjust the width here
                >
                  <UserOutlined />
                </Popover>
              </Menu.Item>
              <Menu.Item key="2">
                <Popover 
                  content={randomTextPopoverContent} 
                  title="Icon 2" 
                  placement="right" 
                  overlayStyle={{ width: 200 }} // Adjust the width here
                >
                  <VideoCameraOutlined />
                </Popover>
              </Menu.Item>
              <Menu.Item key="3">
                <Popover 
                  content={randomTextPopoverContent} 
                  title="Icon 3" 
                  placement="right" 
                  overlayStyle={{ width: 200 }} // Adjust the width here
                >
                  <UploadOutlined />
                </Popover>
              </Menu.Item>
            </Menu>
          </Sider>
        </>
      )}
      {!isMobile && (
        <Sider
          collapsible
          trigger={null}
          collapsed={collapsed}
          onCollapse={setCollapsed}
          className="sidebar"
          onMouseEnter={handleSidebarHover}
          onMouseLeave={handleSidebarHover}
          theme='light'
          style={{
            boxShadow: '2px 0 6px rgba(0, 21, 41, 0.08)'
          }}
        >
          <div className="logo">
            {collapsed ? 'C' : 'CropGen'}
          </div>
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Popover 
                content={profilePopoverContent} 
                title="Profile" 
                placement="right" 
                overlayStyle={{ width: 200 }} // Adjust the width here
              >
                <UserOutlined />
              </Popover>
            </Menu.Item>
            <Menu.Item key="2">
              <Popover 
                content={randomTextPopoverContent} 
                title="Icon 2" 
                placement="right" 
                overlayStyle={{ width: 200 }} // Adjust the width here
              >
                <VideoCameraOutlined />
              </Popover>
            </Menu.Item>
            <Menu.Item key="3">
              <Popover 
                content={randomTextPopoverContent} 
                title="Icon 3" 
                placement="right" 
                overlayStyle={{ width: 200 }} // Adjust the width here
              >
                <UploadOutlined />
              </Popover>
            </Menu.Item>
          </Menu>
        </Sider>
      )}
      <Layout>
        <Header className="header" />
        <Content className="content">Maps Data</Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
