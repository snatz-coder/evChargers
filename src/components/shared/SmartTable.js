
import React from "react";

const SmartTable = ({ columns, data , onAction}) => {
  return (
    <div style={{ overflowX: "auto", margin:"20px"}}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{
                  borderBottom: "2px solid #ccc",
                  textAlign: "left",
                  padding: "8px",
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row.id || rowIndex}
              style={{
                borderBottom: "1px solid #eee",
                backgroundColor: rowIndex % 2 === 0 ? "#fafafa" : "#fff",
              }}
            >
              {columns.map((col) => {
                if (col.type === "action") {
                  return (
                    <td key={col.key} style={{ padding: "8px" }}>
                      <button
                       onClick={() => onAction(row, col.key)}
                        style={{
                          cursor: "pointer",
                          background: "none",
                          border: "none",
                        }}
                      >
                        👁️
                      </button>
                    </td>
                  );
                } else {
                  return (
                    <td key={col.key} style={{ padding: "8px" }}>
                      {row[col.key]}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SmartTable;
