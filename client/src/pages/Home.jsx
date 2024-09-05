import { useState } from "react";

import ArtworkDetails from "../components/ArtworkDetails";
import Map from "../components/Map";

import "leaflet/dist/leaflet.css";
import "../styles/map.css";

export default function Home() {

  const [artworkDetails, setArtworkDetails] = useState();

  return (
    <section className="homePage_Map">
      {artworkDetails && (
        <ArtworkDetails
          artwork={artworkDetails}
          setArtworkDetails={setArtworkDetails}
        />
      )}
      <Map setArtworkDetails={setArtworkDetails} />
    </section>
  );
}
