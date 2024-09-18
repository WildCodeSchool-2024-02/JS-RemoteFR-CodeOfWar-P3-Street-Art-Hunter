import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";

import { GeoLocationContext } from "../services/context/GeoLocationContext";

import "leaflet/dist/leaflet.css";

export default function Map({ setArtworkDetails }) {
  const { usersGlobal } = useLoaderData();

  const userLocation = useContext(GeoLocationContext);

  return (
    userLocation && (
      <MapContainer
        center={[userLocation.latitude, userLocation.longitude]}
        zoom={13}
        style={{ height: "800px", width: "100%", zIndex: 1 }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[userLocation.latitude, userLocation.longitude]} />
        {usersGlobal?.map((artwork) => (
          <Marker
            key={artwork.id}
            position={[artwork.lat, artwork.lon]}
            eventHandlers={{ click: () => setArtworkDetails(artwork) }}
          />
        ))}
      </MapContainer>
    )
  );
}

Map.propTypes = {
  setArtworkDetails: PropTypes.func.isRequired,
};
