'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icons
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapWithMarkers() {
  //   const position = [51.5162, -0.0891];
  return (
    <div className="w-full h-[500px]">
      <MapContainer
        center={[51.5162, -0.0891]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          eventHandlers={{
            add: (marker) => {
              //open popup immediately on mount
              marker.target.openPopup();
            },
          }}
          position={[51.5162, -0.0891]}
          icon={customIcon}
        >
          <Popup autoPan={false}>
            <div className="text-sm bg-white py-2 px-3">
              📍 <b>Our Office</b> <br />
              30 Coleman Street <br />
              London EC2R 5AL, UK
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
