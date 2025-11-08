
import './App.css';
import Map from './components/Map';
import Filter from './components/Filter'
import {useState} from 'react';
import chargerData from './components/data/chargers.json'

function App() {
  const [filters,setFilters] = useState({type:'',status:''})

  const filteredChargers = chargerData.filter((item) => {
    return ((filters.type === "" || item.type === filters.type ) && (filters.status === "" || item.status === filters.status))
  })
  return (
    <div><Filter filters={filters} setFilters={setFilters} /><Map chargers={filteredChargers}/></div>
  );
}

export default App;
