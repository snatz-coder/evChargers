import SmartTable from "./shared/SmartTable";
import { useNavigate, useLocation } from "react-router-dom";

const ChargersList = ({ chargers, page, setPage }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const columns = [
    { key: "name", label: "Name" },
    { key: "status", label: "Status", dataClass: "Chip" },
    { key: "type", label: "Type" },
    { key: "action", label: "Action", type: "action" },
  ];

  const handleAction = (row) => {
    navigate(`/charger-details/${row.id}`, {
      state: { ...location.state, cameFromList: true, currentPage: page },
    });
  };

  return (
    <SmartTable
      columns={columns}
      data={chargers}
      onAction={handleAction}
      page={page}
      setPage={setPage}
    />
  );
};

export default ChargersList;
