import React, {useState} from "react";
import Map from './Map'
import ChargersList from "./ChargersList";

const ChargersView = ({chargers}) => {
    const [showMap , setShowMap] = useState(true);

    return (
        <div>
            <div style={{margin:"16px"}}>
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
                }}>Map</button>
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
                }}>List</button>
            </div>
            {showMap ? <Map chargers={chargers}/> : <ChargersList chargers={chargers}/>}
        </div>

        
    )

};

export default ChargersView;





