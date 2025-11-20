import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";

const SmartTable = ({ columns, data, onAction, page, setPage }) => {
  const rowsPerPage = 5;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((row) =>
    columns.some((col) =>
      row[col.key]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const dataPerPage = filteredData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div style={{ overflowX: "auto", margin: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "8px 30px 8px 10px",
              minWidth: "150px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={() => setSearchTerm("")}
            style={{
              position: "absolute",
              right: "2px",
              top: "50%",
              transform: "translateY(-50%)",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontWeight: "bold",
              color: "#888",
              padding: "0 6px",
            }}
          >
            ×
          </button>
        </div>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} style={{ borderBottom: "2px solid #ccc", textAlign: "left", padding: "8px" }}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataPerPage.map((row, rowIndex) => (
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
                      <Button
                        onClick={() => onAction(row, col.key)}
                        style={{ minWidth: "40px", padding: "8px", borderRadius: "8px" }}
                      >
                        <Visibility style={{ display: "block", margin: "0 auto" }} />
                      </Button>
                    </td>
                  );
                } else if (col.dataClass === "Chip") {
                  const statusColors = {
                    Available: { bg: "#d4edda", color: "#155724" },
                    Charging: { bg: "#fff3cd", color: "#856404" },
                    Offline: { bg: "#e2e3e5", color: "#6c757d" },
                    Faulted: { bg: "#f8d7da", color: "#721c24" },
                  };
                  const chipStyle = statusColors[row[col.key]] || { bg: "#f0f0f0", color: "#000" };
                  return (
                    <td key={col.key} style={{ padding: "8px" }}>
                      <span
                        style={{
                          display: "inline-block",
                          width: "100px",
                          textAlign: "center",
                          padding: "4px 0",
                          borderRadius: "6px",
                          backgroundColor: chipStyle.bg,
                          color: chipStyle.color,
                          fontWeight: "500",
                          fontSize: "0.85rem",
                        }}
                      >
                        {row[col.key]}
                      </span>
                    </td>
                  );
                } else {
                  return <td key={col.key} style={{ padding: "8px" }}>{row[col.key]}</td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "10px", display: "flex", gap: "1rem", float: "right" }}>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)} variant="contained" color="primary">
          Prev
        </Button>
        <Button disabled={page === totalPages || totalPages === 0} onClick={() => setPage(page + 1)} variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default SmartTable;
