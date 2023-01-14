import {
  MapContainer,
  ZoomControl,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import { useSelector } from "react-redux";
import { COORDINATE, PATH_POLYLINE } from "./constant";
import { Routing } from "./Route";

function Map() {
  const selected = useSelector(
    (state) => state.transportationRequests.selected
  );

  const loadingPoint = selected?.loadingPoint.bound;
  const dropPoint = selected?.dropPoint.bound;

  return (
    <>
      <MapContainer
        center={COORDINATE}
        zoom={10}
        zoomControl={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selected && (
          <>
            <Marker position={loadingPoint}>
              <Popup>{"Зона погрузки"}</Popup>
            </Marker>
            <Routing
              start={loadingPoint}
              stop={dropPoint}
              polyline={PATH_POLYLINE}
            />
            <Marker position={dropPoint}>
              <Popup>{"Зона разгрузки"}</Popup>
            </Marker>
          </>
        )}

        <ZoomControl position="topright" />
      </MapContainer>
    </>
  );
}

export default Map;
