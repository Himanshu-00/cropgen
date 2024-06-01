import React, { useState, useEffect } from 'react';
import { UploadOutlined, PieChartTwoTone, BarChartOutlined, FormOutlined, PlusCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Layout, Menu, Card } from 'antd';
import MyComponent from './CropAnalytics';
import '../App.css';

const { Sider } = Layout;

const Menubar = ({ selectedMenu, setSelectedMenu }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [barStyle, setBarStyle] = useState('block');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    toggleBarStyle();
  }, [collapsed]);

  const handleMenuClick = (key) => {
    setSelectedMenu((prevKey) => (prevKey === key ? null : key));
  };

  const toggleBarStyle = () => {
    setBarStyle((prevStyle) => (prevStyle === 'block' ? 'none' : 'block'));
  };

  // Consolidated Hover Logic
  const handleSidebarHover = () => {
    if (!isMobile) {
      setCollapsed(!collapsed);
    }
  };

  const menuItems = [
    { key: 'CropAnalytics', icon: <BarChartOutlined />, label: 'Crop Analytics' },
    { key: 'AddCrop', icon: <PlusCircleOutlined />, label: 'Add Crop' },
    { key: 'Form Manager', icon: <FormOutlined />, label: 'Form Manager' },
    { key: 'Crop Information', icon: <PlusCircleOutlined />, label: 'Crop Information' },
    { key: 'Disease Detection', icon: <PlusCircleOutlined />, label: 'Disease Detection' },
    { key: 'Weather Information', icon: <PlusCircleOutlined />, label: 'Weather Information' },
    { key: 'Farm Add', icon: <InfoCircleOutlined />, label: 'Farm Add' },
    { key: 'Scouting', icon: <PlusCircleOutlined />, label: 'Scouting' },
    { key: 'Farm Manager', icon: <PlusCircleOutlined />, label: 'Farm Manager' },
    { key: 'Weather Data', icon: <PieChartTwoTone />, label: 'Weather Data' },
    { key: 'Crop Advisory', icon: <PlusCircleOutlined />, label: 'Crop Advisory' },
    { key: 'Soil Analysis', icon: <UploadOutlined />, label: 'Soil Analysis' },
    { key: 'Last Soil Productivity', icon: <PlusCircleOutlined />, label: 'Last Soil Productivity' },
  ];

  const renderComponent = () => {
    if (selectedMenu) {
      switch (selectedMenu) {
        case 'CropAnalytics':
          return (
            <Card title="Crop Analytics" style={{ width: '100%', height: '100%' }}>
              <MyComponent />
            </Card>
          );
        // Cases for other menu items
        default:
          return null;
      }
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        className="Menubar"
        theme="light"
        // Apply hover logic only if not mobile
        onMouseEnter={!isMobile ? handleSidebarHover : undefined}
        onMouseLeave={!isMobile ? handleSidebarHover : undefined}
        style={{
          boxShadow: isMobile ? 'none' : '2px 0 6px rgba(0, 21, 41, 0.08)', // Improved Styling
        }}
      >
        <div className="logo" style={{ padding: '10px 0', textAlign: 'center' }}>
          {collapsed ? 'C' : 'CropGen'}
        </div>
        <Menu mode="inline" selectedKeys={[selectedMenu]} onClick={({ key }) => handleMenuClick(key)}>
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {!collapsed && <span style={{ marginLeft: 8 }}>{item.label}</span>}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Layout>
        {selectedMenu ? (
          <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ display: barStyle, flex: '1', overflow: 'auto' }}>
              {renderComponent()}
            </div>
          </div>
        ) : null}
      </Layout>
    </Layout>
  );
};

export default Menubar;
