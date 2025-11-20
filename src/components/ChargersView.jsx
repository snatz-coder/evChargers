import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Map from "./Map";
import ChargersList from "./ChargersList";

const ChargersView = ({ chargers }) => {
  const location = useLocation();
  const [showMap, setShowMap] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (location.state) {
      if (location.state.cameFromList !== undefined) {
        setShowMap(!location.state.cameFromList);
      }
      if (location.state.currentPage) {
        setPage(location.state.currentPage);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div style={{ margin: "16px" }}>
        <button
          onClick={() => setShowMap(true)}
          style={{
            padding: "8px 14px",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
            border: showMap ? "1px solid #4A90E2" : "1px solid #ccc",
            background: showMap ? "#4A90E2" : "#fff",
            color: showMap ? "#fff" : "#000",
            cursor: "pointer",
          }}
        >
          Map
        </button>
        <button
          onClick={() => setShowMap(false)}
          style={{
            padding: "8px 14px",
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
            border: !showMap ? "2px solid #4A90E2" : "1px solid #ccc",
            background: !showMap ? "#4A90E2" : "#fff",
            color: !showMap ? "#fff" : "#000",
            cursor: "pointer",
          }}
        >
          List
        </button>
      </div>

      {showMap ? (
        <Map chargers={chargers} />
      ) : (
        <ChargersList chargers={chargers} page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default ChargersView;
