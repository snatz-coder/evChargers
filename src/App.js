
import './App.css';
import Filter from './components/Filter'
import {useState} from 'react';
import chargerData from './components/data/chargers.json'
import ChargersView from './components/ChargersView';

function App() {
  const [filters,setFilters] = useState({type:'',status:''})

  const filteredChargers = chargerData.filter((item) => {
    return ((filters.type === "" || item.type === filters.type ) && (filters.status === "" || item.status === filters.status))
  })
  return (
    <div><Filter filters={filters} setFilters={setFilters} /><ChargersView chargers={filteredChargers}/></div>
  );
}

export default App;
