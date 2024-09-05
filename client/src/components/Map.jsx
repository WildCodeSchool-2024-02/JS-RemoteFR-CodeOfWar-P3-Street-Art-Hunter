import { MapContainer, TileLayer, Marker } from "react-leaflet";

import { useLoaderData } from "react-router-dom";

import "leaflet/dist/leaflet.css";

export default function Map() {

  const data = useLoaderData();
  
  const position = [48.8566, 2.3522];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "800px", width: "100%", zIndex: 1 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {data?.map((artwork) => (
        <Marker
          key={artwork.id}
          position={[artwork.lat, artwork.lon]}
        />
      ))}
    </MapContainer>
  );
}