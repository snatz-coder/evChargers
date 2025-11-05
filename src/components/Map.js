import React, { useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
const defaultCenter = {
  lat: 51.5074,
  lng: -0.1278,
};

const containerStyle = {
  height: "400px",
  width: "100%",
};

const Map = ({ center = defaultCenter, markers = [defaultCenter] }) => {
  const [map, setMap] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const unMount = useCallback(() => {
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
      zoom={12}
      mapContainerStyle={containerStyle}
      onLoad={onLoad}
      unMount={unMount}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.lat, lng: marker.lng }}
          title={marker.title}
        />
      ))}
    </GoogleMap>
  );
};

export default React.memo(Map);
