import "./OneMegaMap.css";
import { MapContainer } from "react-leaflet";
import { Popup, Marker, TileLayer } from "react-leaflet";

function OneMegaMap({ oneMega }) {
  return (
    <MapContainer
      center={[oneMega.position.lat, oneMega.position.long]}
      zoom={5}
      style={{
        height: "200px",
        width: "200px",
        border: "2px solid",
        borderRadius: "5px",
      }}
    >
      <TileLayer
        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      />
      {oneMega.position && (
        <Marker
          position={[oneMega.position.lat || 0, oneMega.position.long || 0]}
        >
          <Popup>
            <h1>test</h1>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default OneMegaMap;
