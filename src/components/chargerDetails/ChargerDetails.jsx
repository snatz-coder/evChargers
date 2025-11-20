import { useNavigate, useParams, useLocation } from "react-router-dom";
import "../chargerDetails/chargerDetails.scss";
import Button from "@mui/material/Button";

const ChargerDetails = ({ chargers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const charger = chargers.find((c) => c.id.toString() === id);
  if (!charger) return <div>Charger not found</div>;

  return (
    <div className="charger-detail-container">
      <h1>Charger Details</h1>
      <p><strong>Name:</strong> {charger.name}</p>
      <p><strong>Status:</strong> {charger.status}</p>
      <p><strong>Type:</strong> {charger.type}</p>

     <Button
  variant="contained"
  color="primary"
  onClick={() =>
    navigate("/", {
      state: {
        cameFromList: true,
        currentPage: location.state?.currentPage ?? 1,
      },
    })
  }
  className="back-button"
>
  Back
</Button>
    </div>
  );
};

export default ChargerDetails;
