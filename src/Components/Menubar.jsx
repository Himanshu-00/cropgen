import React, { useState, useEffect } from 'react';
import { UploadOutlined, PieChartTwoTone, BarChartOutlined, FormOutlined, PlusCircleOutlined,
  InfoCircleOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import MapData from './MapsView';
import MyComponent from './CropAnalytics';



const { Sider} = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true); 
  const [isMobile, setIsMobile] = useState(false);
  const [ setBarStyle] = useState('block');
  const [selectedMenu, setSelectedMenu] = useState(null);

  

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    handwidth();
  }, [collapsed]);

  const handleMenuClick = (key) => {

    setSelectedMenu(key);
    
  };
  
  
  const handwidth = () => {
    setBarStyle((prevStyle) => (prevStyle === 'block' ? 'none' : 'block'));
  };

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
    { key: 'Crop Somethig', icon: <UploadOutlined />, label: 'Crop Somethig' },
    { key: 'Fertilizers', icon: <PlusCircleOutlined />, label: 'Fertilizers' },
    { key: 'Last Soil Productivity', icon: <PlusCircleOutlined />, label: 'Last Soil Productivity' },


  ];

  
  
  const renderComponent = () => {
    if (selectedMenu) {
      switch (selectedMenu) {
        case 'CropAnalytics':
          return <MyComponent />;
        // Add cases for other menu items if needed
        default:
          return null;
      }
    } else {
      return <MyComponent/>;
    }
  };
  
  

  

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isMobile && (
        <>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            className="Menubar"
            theme='light'
          >
            <div className="logo">
              {collapsed ? 'C' : 'CropGen'}
            </div>
            {/*Menu Items*/}
            <Menu mode="inline" defaultSelectedKeys={['1']}>
            {menuItems.map(item => (
              <Menu.Item key={item.key} icon={item.icon} onClick={() => handleMenuClick(item.key)} overlayStyle={{ width: 200 }}>
                {!collapsed && <span style={{ marginLeft: 8 }}>{item.label}</span>}
              </Menu.Item>
            ))}
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
          <Menu mode="inline" selectedKeys={[selectedMenu]}>
           
          {menuItems.map(item => (
              <Menu.Item key={item.key} icon={item.icon} onClick={() => handleMenuClick(item.key)}>
                {!collapsed && <span style={{ marginLeft: 8 }}>{item.label}</span>}
              </Menu.Item>
            ))}

           </Menu>
        </Sider>

        )}

        <Layout>
     <div style={{ display: collapsed? 'none': 'block' }}>
        {renderComponent()}
      </div>
     </Layout>
     <Layout>
      <MapData/>
     </Layout>
         
    </Layout>
    
  );
};

export default Sidebar;
