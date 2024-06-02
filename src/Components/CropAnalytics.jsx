import { Card, Progress } from 'antd';
import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Plot from 'react-plotly.js';
import MapData from './MapsView';

const SoilMoistureTemperatureGraph = () => {
  const [showSoilMoisture] = useState(true);
  const [showTemperature] = useState(true);

  const data = [
    { name: 'Jan', soilMoisture: 20, temperature: 28 },
    { name: 'Feb', soilMoisture: 75, temperature: 42 },
    { name: 'Mar', soilMoisture: 44, temperature: 5 },
  ];

  return (
    <Card style={{ borderRadius: 45, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ padding: '10px', width: '100%', height: '100%' }}>
        <Plot
          data={[
            showSoilMoisture && {
              type: 'scatter',
              mode: 'lines+markers',
              name: 'Soil Moisture',
              x: data.map(({ name }) => name),
              y: data.map(({ soilMoisture }) => soilMoisture),
              marker: { color: '#3baf36' },
              line: { shape: 'spline' },
            },
            showTemperature && {
              type: 'scatter',
              mode: 'lines+markers',
              name: 'Temperature',
              x: data.map(({ name }) => name),
              y: data.map(({ temperature }) => temperature),
              marker: { color: '#FF5733' },
              line: { shape: 'spline' },
            },
          ].filter(Boolean)}
          layout={{
            xaxis: { title: 'Month' },
            yaxis: { title: 'Value' },
            legend: { orientation: 'h', x: 0, y: 1.2 },
            margin: { r: 0, l: 55, b: 45 },
            autosize: true,
          }}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </Card>
  );
};

const CircularIndicator = ({ percent, label }) => (
  <div style={{ textAlign: 'center', margin: '10px' }}>
    <Card style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 45 }}>
      <Progress
        type="circle"
        percent={percent}
        strokeWidth={12}
        strokeColor="#116B5F"
        format={() => (
          <div style={{ color: '#116B5F', fontWeight: 'bold' }}>
            {percent}%
            <div style={{ fontSize: '12px', fontWeight: 'normal', marginTop: '5px' }}>{label}</div>
          </div>
        )}
      />
    </Card>
  </div>
);

const CircularCards = () => {
  const circularData = [
    { percent: 10, label: 'Crop Health' },
    { percent: 50, label: 'Crop Name ' },
    { percent: 80, label: 'Stats' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px', marginBottom: '20px' }}>
      {circularData.map(({ percent, label }, index) => (
        <div key={index} style={{ flex: '1 1 33%', display: 'flex', justifyContent: 'center' }}>
          <CircularIndicator percent={percent} label={label} />
        </div>
      ))}
    </div>
  );
};

const SideBySideRectangleCards = () => (
  <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '0 10px' }}>
    <Card
      title=""
      style={{ width: '50%', backgroundColor: '#ffffff', borderRadius: 45, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
    ></Card>

    <Card
      title="Crop Nutrients"
      style={{
        width: '50%',
        backgroundColor: '#ffffff',
        borderRadius: 45,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <p>Nitrogen</p>
          <Progress percent={60} status="active" showInfo={true} strokeWidth={10} style={{ marginBottom: '10px' }} strokeColor="#116B5F" />
        </div>
        <div style={{ marginBottom: '20px' }}>
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

const FullScreenCard = () => (
  <Card
    title={<span style={{ color: '#ffffff', fontWeight: 'bold' }}>Soil Moisture & Temperature</span>}
    headStyle={{ borderBottom: 0, paddingTop: '25px' }}
    style={{
      width: '94%',
      margin: '15px auto',
      backgroundColor: '#116B5F',
      borderRadius: 45,
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    }}
    hoverable
  >
    <SoilMoistureTemperatureGraph />
  </Card>
);

const Maps = () => (
  <Card
    title="Map Data"
    style={{
      flex: '1',
      backgroundColor: '#ffffff',
      borderRadius: 45,
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'auto',
    }}
    headStyle={{ borderBottom: 0, paddingTop: '25px', position: 'relative' }}
  >
    <div style={{ height: '100%', width: '100%' }}>
      <MapData />
    </div>
  </Card>
);

const MyComponent = () => (
  <div>
    <div style={{ display: 'flex', gap: '10px', height: '100%' }}>
      <Maps />
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <CircularCards />
        <SideBySideRectangleCards />
      </div>
    </div>
    <FullScreenCard />
  </div>
);

export default MyComponent;
