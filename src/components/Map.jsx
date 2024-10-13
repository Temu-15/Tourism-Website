import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { div } from "framer-motion/client";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
});
const locations = [
  { id: 1, name: "AddisTravel HQ", position: [9.03414, 38.771943] },
  {
    id: 2,
    name: "Addis Travel Addis Ketema Branch",
    position: [9.027234, 38.716107],
  },
];

function Map() {
  return (
    <div className="z">
      <h2 className="font-bold text-[24px] mb-4  md:text-[30px] leading-[36px] md:leading-[45px] text-[#05073C] text-center">
        Where we are found
      </h2>
      <MapContainer
        center={[9.030688, 38.744025]}
        zoom={12}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker key={location.id} position={location.position}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
