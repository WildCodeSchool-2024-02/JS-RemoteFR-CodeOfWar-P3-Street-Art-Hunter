import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import L from "leaflet";

import pinArt from "../assets/images/pinArt.png";
import circlePin from "../assets/images/circlePin.png";
import { GeoLocationContext } from "../services/context/GeoLocationContext";

import "leaflet/dist/leaflet.css";

export default function Map({ setArtworkDetails }) {
  const { usersGlobal } = useLoaderData();

  const userLocation = useContext(GeoLocationContext);

  const userPin = L.icon({
    iconUrl: circlePin,
    iconSize: [32, 32],
  });
  const artPin = L.icon({
    iconUrl: pinArt,
    iconSize: [32, 32],
  });

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
        <Marker
          position={[userLocation.latitude, userLocation.longitude]}
          icon={userPin}
        />
        {usersGlobal?.map((artwork) => (
          <Marker
            key={artwork.id}
            position={[artwork.lat, artwork.lon]}
            eventHandlers={{ click: () => setArtworkDetails(artwork) }}
            icon={artPin}
          />
        ))}
      </MapContainer>
    )
  );
}

Map.propTypes = {
  setArtworkDetails: PropTypes.func.isRequired,
};
