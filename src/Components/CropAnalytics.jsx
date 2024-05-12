import { Card, Progress } from 'antd';
import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Plot from 'react-plotly.js';



const SoilMoistureTemperatureGraph = () => {
  const [showSoilMoisture] = useState(true);
  const [showTemperature] = useState(true);
  //Static Data
  const data = [
    { name: 'Jan', soilMoisture: 20, temperature: 28 },
    { name: 'Feb', soilMoisture: 75, temperature: 42 },
    { name: 'Mar', soilMoisture: 44, temperature: 5 },

  ];

  return (
    <Card
      
      style={{
        borderRadius: 45,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      
      }}
    > 
    <div style={{padding: '10px', width: '100%', height: '100%'}}>
      <Plot
        data={[
          showSoilMoisture && {
            type: 'scatter',
            mode: 'lines+markers',
            name: 'Soil Moisture',
            x: data.map(({ name }) => name),
            y: data.map(({ soilMoisture }) => soilMoisture),
            marker: { color: '#3baf36' },
            line: { shape: 'spline' }, // Smooth spline curve
          },
          showTemperature && {
            type: 'scatter',
            mode: 'lines+markers',
            name: 'Temperature',
            x: data.map(({ name }) => name),
            y: data.map(({ temperature }) => temperature),
            marker: { color: '#FF5733' },
            line: { shape: 'spline' }, // Smooth spline curve
          },
        ].filter(Boolean)}
        layout={{
          xaxis: { title: 'Month' },
          yaxis: { title: 'Value' },
          legend: { orientation: 'h', x: 0, y: 1.2 },
          margin: { r: 0, l: 55, b: 45 }, // Adjust margins for better alignment
          autosize: true, 
          
        }}
        style={{ width: '100%', height: '100%' }}
       
      />
      </div>
    </Card>
  );
};





//Circular indicator. 

const CircularIndicator = ({percent, label}) => {

  return (
    <div style={{ textAlign: 'center', marginRight: '10px' }}>
    <Card style={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 45}}>
      <Progress type="circle" percent={percent} strokeWidth={12} strokeColor="#116B5F"
      format={() => (
        <div style={{ color: '#116B5F', fontWeight: 'bold'}}>
          {percent}%
          <div style={{ fontSize: '12px', fontWeight: 'normal', marginTop: '5px' }}>{label}</div>
        </div>
      )}
      />
    </Card>
    </div>
  );
};

  const CircularCards = () => {
    
    

    const circularData = [
      { percent: 10, label: 'Crop Health' },
      { percent: 50, label: 'Crop Name ' },
      { percent: 80, label: 'Stats' }
    ]; // Static circular indicator data
  
    const circles = circularData.map(({ percent, label }, index) => (
      <div key={index} style={{ flex: '0 0 33.33%', display: 'flex', justifyContent: 'center' }}>
         <CircularIndicator percent={percent} label={label} />
      </div>
    ));
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}>
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
        borderRadius: 45,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
       <img src="https://custom-scripts.sentinel-hub.com/custom-scripts/sentinel-1/soil_moisture_estimation/fig/Vijayawada_India.jpg" alt="Placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

    </Card>
  );
};

const SideBySideRectangleCards = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '45px 10px' }}>
      <Card title="" style={{ width: '50%', backgroundColor: '#ffffff', borderRadius: 45, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }
    }>
      
 
      </Card>

      {/*Card 2*/} 

      <Card
    title="Crop Nutrients"
    style={{
      width: '45%',
      height: '10%',
      backgroundColor: '#ffffff',
      borderRadius: 45,
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
    }}
  >
    <div>
      <div style={{ marginBottom: '10px' }}>
        <p>Nitrogen</p>
        <Progress percent={60} status="active" showInfo={true} strokeWidth={10} style={{ marginBottom: '10px' }} strokeColor="#116B5F" />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <p>Phosphorus</p>
        <Progress percent={40} status="active" showInfo={true} strokeWidth={10} style={{ marginBottom: '10px' }} strokeColor="#116B5F" />
      </div>
      <div>
        <p>Potassium</p>
        <Progress percent={80} status="active" showInfo={true} strokeWidth={10} strokeColor="#116B5F" />
      </div>
    </div>
  </Card>
  
    </div>
  );
};

const FullScreenCard = () => {
  return (
    <Card title={<span style={{ color: '#ffffff', fontWeight: 'bold' }}>Soil Moisture & Temperature</span>} headStyle={{ borderBottom: 0, paddingTop: '25px'}} style={{width: '94%', margin: '15px auto', backgroundColor: '#116B5F', borderRadius: 45, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' } } hoverable>
      <SoilMoistureTemperatureGraph/>
    </Card>
  );
};

const MyComponent = () => {
  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '10px', borderRadius: 45 }}>
      <RectangleCard />
      <CircularCards />
      <SideBySideRectangleCards />
      <FullScreenCard />
    </div>
  );
};

export default MyComponent;
