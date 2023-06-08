import React from "react";
import GoogleMapReact from "google-map-react";

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const MapComponent: React.FC<MapProps> = ({ center, zoom }) => {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Pin lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

const Pin: React.FC<{ lat: number; lng: number }> = ({}) => (
  <div
    style={{
      position: "relative",
      color: "white",
      background: "red",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
    }}
  >
    Pin
  </div>
);

export default MapComponent;
