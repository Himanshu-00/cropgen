import React from 'react';
import { Card } from 'antd';

const Circle = () => {
    return (
      <div style={{ width: 120, height: 120, borderRadius: '50%', backgroundColor: '#1890ff', margin: '20px' }}></div>
    );
  };
  
  const CircularCards = () => {
    const circles = Array.from({ length: 6 }, (_, i) => (
      <div key={i} style={{ flex: '0 0 33.33%', display: 'flex', justifyContent: 'center' }}>
        <Circle />
      </div>
    ));
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '30px' }}>
        {circles}
      </div>
    );
  };

const RectangleCard = () => {
  return (
    <Card
      hoverable
      title="Satelite Data"
      style={{
        width: '94%',
        height: '300px',
        margin: '40px auto',
        backgroundColor: '#ffffff',
        borderRadius: 30,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
    </Card>
  );
};

const SideBySideRectangleCards = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '45px 10px' }}>
      <Card title="Card 1" style={{ width: '46%', backgroundColor: '#ffffff', borderRadius: 30, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <p>Card content 1</p>
        <p>Card content 2</p>
        <p>Card content 3</p>
      </Card>
      <Card title="Card 2" style={{ width: '46%', backgroundColor: '#ffffff', borderRadius: 30, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <p>Card content 1</p>
        <p>Card content 2</p>
        <p>Card content 3</p>
      </Card>
    </div>
  );
};

const FullScreenCard = () => {
  return (
    <Card title="Full Screen Card" style={{ width: '93%', margin: '15px auto', backgroundColor: '#ffffff', borderRadius: 30, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <p>Full screen card content</p>
      <p>Full screen card content</p>
      <p>Full screen card content</p>
    </Card>
  );
};

const MyComponent = () => {
  return (
    <div style={{ backgroundColor: '#f0f2f5', padding: '10px' }}>
      <RectangleCard />
      <CircularCards />
      <SideBySideRectangleCards />
      <FullScreenCard />
    </div>
  );
};

export default MyComponent;
