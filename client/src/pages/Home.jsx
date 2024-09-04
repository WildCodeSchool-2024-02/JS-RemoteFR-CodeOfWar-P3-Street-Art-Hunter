import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useState, useEffect } from "react";

import myAxios from "../services/instanceAxios";

import "leaflet/dist/leaflet.css";
import "../styles/map.css";

export default function Home() {
  const position = [48.8566, 2.3522];

  const [data, setData] = useState();

  useEffect(() => {
    myAxios
      .get("/artworks")
      .then((response) => setData(response.data))
      .catch((error) => console.info(error));
  }, [data]);

  return (
    <section className="homePage_Map">
      <MapContainer
        id="map_container"
        center={position}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {data?.map((artwork) => (
          <Marker key={artwork.id} position={[artwork.lat, artwork.lon]}>
            <Popup>
              {artwork.title},{artwork.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}
