import MapComponent from "../../Components/MapComponent/MapComponent";
import "./MapPage.css";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";

function MapPage() {
  return (
    <div className="MapPage">
      <MapComponent />
    </div>
  );
}

export default MapPage;
