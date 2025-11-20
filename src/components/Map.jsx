import React, { useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import markerGreen from "../assets/marker_green.svg";
import markerRed from "../assets/marker_red.svg";
import markerYellow from "../assets/marker_yellow.svg";
import markerGrey from "../assets/marker_grey.svg";
const defaultCenter = {
  lat: 51.5074,
  lng: -0.1278,
};

const containerStyle = {
  height: "400px",
  width: "calc(100vw - 40px)",
  margin: "20px"
};

const statusIcons = {
  Available: markerGreen,
  Faulted: markerRed,
  Charging: markerYellow,
  Offline: markerGrey,
};

const Map = ({ center = defaultCenter, chargers = [] }) => {
  const [, setMap] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const onUnMount = useCallback(() => {
    setMap(null);
  }, []);

  if (loadError) {
    return <div>Load error</div>;
  }

  if (!isLoaded) {
    return <div>Map is Loading...</div>;
  }

  return (
    <GoogleMap
      center={center}
      zoom={7}
      mapContainerStyle={containerStyle}
      onLoad={onLoad}
      onUnmount={onUnMount}
    >
      {chargers.map((charger, index) => {
       const markerIcon = {
          url: statusIcons[charger.status],
          scaledSize: new window.google.maps.Size(36, 42),
        };
   return(
        <Marker
          key={index}
          position={{ lat: charger.lat, lng: charger.lng }}
          title={`${charger.name} - ${charger.status}`}
          icon={markerIcon}
        />
)})}
    </GoogleMap>
  );
};

export default React.memo(Map);
