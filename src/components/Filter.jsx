import Button from "@mui/material/Button";

const Filter = ({ filters, setFilters }) => {
  const handleTypeChange = (e) => {
    setFilters({ ...filters, type: e.target.value });
  };

  const handleStatusChange = (e) => {
    setFilters({ ...filters, status: e.target.value });
  };

  const handleReset = () => {
    setFilters({ type: "", status: "" });
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        margin: "20px",
      }}
    >
      <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>
        Filter Chargers
      </h2>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1", minWidth: "150px" }}>
          <label
            htmlFor="type-select"
            style={{ display: "block", marginBottom: "4px" }}
          >
            Type
          </label>
          <select
            id="type-select"
            value={filters.type}
            onChange={handleTypeChange}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">All</option>
            <option value="Slow">Slow</option>
            <option value="Fast">Fast</option>
          </select>
        </div>

        <div style={{ flex: "1", minWidth: "150px" }}>
          <label
            htmlFor="status-select"
            style={{ display: "block", marginBottom: "4px" }}
          >
            Status
          </label>
          <select
            id="status-select"
            value={filters.status}
            onChange={handleStatusChange}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">All</option>
            <option value="Available">Available</option>
            <option value="Charging">Charging</option>
            <option value="Faulted">Faulted</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
        <Button onClick={handleReset} variant="contained" color="primary" style={{marginTop:"20px"}}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Filter;
