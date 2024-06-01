import React, { useState, useEffect, useRef } from 'react';
import { Layout, Switch, Button } from 'antd';
import { MapContainer, TileLayer, Marker, Popup, Polygon, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import '../App.css'; // Ensure to include your custom CSS

const { Content } = Layout;

const MapData = () => {
  const [markers, setMarkers] = useState([]);
  const [isAddingMarkers, setIsAddingMarkers] = useState(false);
  const mapRef = useRef();

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
          setMarkers((currentMarkers) => {
            const newMarkers = [...currentMarkers, { lat, lng }];
            return newMarkers.length > 12 ? newMarkers.slice(-12) : newMarkers;
          });
        }
      },
    });
    return null;
  };

  const ResizeHandler = () => {
    const map = useMap();
    useEffect(() => {
      map.invalidateSize();
    }, [map]);
    return null;
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Content style={{ height: '100%', position: 'relative' }}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          {markers.map((marker, idx) => (
            <Marker key={idx} position={[marker.lat, marker.lng]} icon={customMarkerIcon}>
              <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
          ))}
          {markers.length > 0 && <Polygon positions={markers.map((marker) => [marker.lat, marker.lng])} color="purple" />}
          <Markers />
          <ResizeHandler />
        </MapContainer>
        <div className="map-controls">
          <Switch
            checked={isAddingMarkers}
            checkedChildren="Disable Adding"
            unCheckedChildren="Enable Adding"
            onChange={(checked) => setIsAddingMarkers(checked)}
            style={{ marginBottom: 10 }}
          />
          <Button onClick={() => setMarkers([])}>Delete Markers</Button>
        </div>
      </Content>
    </Layout>
  );
};

export default MapData;
