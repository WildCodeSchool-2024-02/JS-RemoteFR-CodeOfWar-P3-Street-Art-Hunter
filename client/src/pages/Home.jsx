import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import ArtworkDetails from "../components/ArtworkDetails";
import Map from "../components/Map";

import "leaflet/dist/leaflet.css";
import "../styles/map.css";
import { UserInfoContext } from "../services/context/UserInfoContext";

export default function Home() {
  const [artworkDetails, setArtworkDetails] = useState();
  const { userInfo } = useContext(UserInfoContext);

  return (
    <section className="homePage_Map">
      {artworkDetails && (
        <ArtworkDetails
          artwork={artworkDetails}
          setArtworkDetails={setArtworkDetails}
        />
      )}
      {userInfo && (
        <Link to={`/favorites/${userInfo.id}`} className="btnFavorites">
          Favoris
        </Link>
      )}
      <Map setArtworkDetails={setArtworkDetails} />
    </section>
  );
}
