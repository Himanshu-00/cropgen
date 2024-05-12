import React, { useState } from 'react';
import { Layout, Switch, Button } from 'antd';
import { MapContainer, TileLayer, Marker, Popup, Polygon, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


const { Content } = Layout;

const MapData = () => {
  const [markers, setMarkers] = useState([]);
  const [isAddingMarkers, setIsAddingMarkers] = useState(false);

  const customMarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadow,
    shadowSize: [41, 41],
  });

  const Markers = () => {
    useMapEvents({
      click: (e) => {
        if (isAddingMarkers) {
          const { lat, lng } = e.latlng;
          setMarkers(currentMarkers => {
            const newMarkers = [...currentMarkers, { lat, lng }];
            return newMarkers.length > 12 ? newMarkers.slice(-12) : newMarkers;
          });
        }
      }
    });
    return null;
  };

  return (
    <Layout>
      <Content style={{ height: '100vh' }}>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          {markers.map((marker, idx) => (
            <Marker key={idx} position={[marker.lat, marker.lng]} icon={customMarkerIcon}>
              <Popup>A pretty CSS3 popup.<br /> Easily customizable.</Popup>
            </Marker>
          ))}
          <Polygon positions={markers.map(marker => [marker.lat, marker.lng])} color="purple" />
          <Markers />
        </MapContainer>
        <div style={{ position: 'absolute', top: 0, right: 10, zIndex: 1000 }}>
        <Switch 
          checked={isAddingMarkers}
          checkedChildren="Disable Adding" 
          unCheckedChildren="Enable Adding" 
          onChange={checked => setIsAddingMarkers(checked)}
          style={{position: 'absolute', top: 15}}
          
        />
         <Button
          onClick={() => setMarkers([])}
          style={{marginTop: 50}}
        >
          Delete Markers
        </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default MapData;
