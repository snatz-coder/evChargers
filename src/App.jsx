import "./App.css";
import Filter from "./components/Filter";
import { useState } from "react";
import chargerData from "./components/data/chargers.json";
import ChargersView from "./components/ChargersView";
import ChargerDetails from "./components/chargerDetails/ChargerDetails"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [filters, setFilters] = useState({ type: "", status: "" });

  const filteredChargers = chargerData.filter((item) => {
    return (
      (filters.type === "" || item.type === filters.type) &&
      (filters.status === "" || item.status === filters.status)
    );
  });
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Filter filters={filters} setFilters={setFilters} />
              <ChargersView chargers={filteredChargers} />
            </div>
          }
        />
        <Route 
        path="/charger-details/:id" 
        element={
          <ChargerDetails chargers={chargerData} />
        }/>
      </Routes>
    </Router>
  );
}

export default App;
