import React, { useState, useEffect } from 'react';
import { UploadOutlined, PieChartTwoTone, BarChartOutlined, FormOutlined, PlusCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Layout, Menu, Card } from 'antd';
import MyComponent from './CropAnalytics';
import '../App.css';

const { Sider } = Layout;

const Menubar = ({ selectedMenu, setSelectedMenu }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = (key) => {
    console.log(`Menu clicked: ${key}`);
    setSelectedMenu((prevKey) => (prevKey === key ? null : key));
  };

  const menuItems = [
    { key: 'CropAnalytics', icon: <BarChartOutlined />, label: 'Crop Analytics' },
    { key: 'AddCrop', icon: <PlusCircleOutlined />, label: 'Add Crop' },
    { key: 'FormManager', icon: <FormOutlined />, label: 'Form Manager' },
    { key: 'CropInformation', icon: <PlusCircleOutlined />, label: 'Crop Information' },
    { key: 'DiseaseDetection', icon: <PlusCircleOutlined />, label: 'Disease Detection' },
    { key: 'WeatherInformation', icon: <PlusCircleOutlined />, label: 'Weather Information' },
    { key: 'FarmAdd', icon: <InfoCircleOutlined />, label: 'Farm Add' },
    { key: 'Scouting', icon: <PlusCircleOutlined />, label: 'Scouting' },
    { key: 'FarmManager', icon: <PlusCircleOutlined />, label: 'Farm Manager' },
    { key: 'WeatherData', icon: <PieChartTwoTone />, label: 'Weather Data' },
    { key: 'CropAdvisory', icon: <PlusCircleOutlined />, label: 'Crop Advisory' },
    { key: 'SoilAnalysis', icon: <UploadOutlined />, label: 'Soil Analysis' },
    { key: 'LastSoilProductivity', icon: <PlusCircleOutlined />, label: 'Last Soil Productivity' },
  ];

  const renderComponent = () => {
    console.log(`Selected menu: ${selectedMenu}`);
    switch (selectedMenu) {
      case 'CropAnalytics':
        console.log('Rendering CropAnalytics component');
        return (
          <Card title="Crop Analytics" style={{ width: '100%', height: '100%' }}>
            <MyComponent />
          </Card>
        );
      // Cases for other menu items can be added here
      default:
        console.log('No component to render');
        return null;
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
        style={{
          boxShadow: isMobile ? 'none' : '2px 0 6px rgba(0, 21, 41, 0.08)',
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
        <div style={{ display: 'flex', height: '100vh' }}>
          <div style={{ flex: '1', overflow: 'auto' }}>
            {renderComponent()}
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

export default Menubar;
