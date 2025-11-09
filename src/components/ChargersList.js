import React from "react";

import SmartTable from "./shared/SmartTable";



const ChargersList = ({chargers}) => {
    const columns = [
        { key: "name", label: "Name" },
        { key: "status", label: "Status", dataClass: "Chip"},
        { key: "type", label: "Type" },
        { key: "action", label: "Action", type: "action" }, 
    ];

   const handleAction = () => {
    alert("View Charger (wip)")
   }

    return (
        <SmartTable  columns={columns} data={chargers} onAction={handleAction} />
    )

}

export default ChargersList;