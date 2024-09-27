import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import GradientButton from "./GradientButton";
import useScreenWidth from "../utils/hook/useScreenWidth";
import { getCityName, postFavorites, updateScore } from "../services/request";
import { frenchDate } from "../utils/function";

import "../styles/styleArtworkDetail.css";
import { UserInfoContext } from "../services/context/UserInfoContext";

export default function ArtworkDetails({ artwork, setArtworkDetails }) {
  const artworkUrl = `${import.meta.env.VITE_API_URL_ARTWORK}/${artwork.image_url}`;
  console.info("artworkUrl", artworkUrl);
  const { userInfo } = useContext(UserInfoContext);
  const screenWidth = useScreenWidth();
  const [artworkLocation, setArtworkLocation] = useState();

  const HandleUpdateScore = () => {
    updateScore(userInfo.id, 100);
    postFavorites(artwork.id);
    console.info(userInfo.id, artwork.id);
  };

  useEffect(() => {
    if (artwork.lat) {
      getCityName(artwork.lat, artwork.lon, setArtworkLocation);
    }
  }, [artwork.lat, artwork.lon]);
  return (
    <section className="detailsContaineur">
      <div className="detailsContain">
        <img src={artworkUrl} alt={artwork.title} className="detailsImg" />
        <div className="textDetailsContainer">
          <div className="textDetails">
            <p className="title">{artwork.title}</p>
            <p>{artwork.author}</p>
          </div>
          <div className="textDetails">
            <p>📅 {frenchDate(artwork.create_date)}</p>
            <p>
              {artworkLocation && (
                <>
                  📍 {artworkLocation.city}, {artworkLocation.country}
                </>
              )}
            </p>
          </div>
          {screenWidth < 480 && userInfo && (
            <div className="btnPointsElement">
              <GradientButton text="✔︎" onClick={HandleUpdateScore} />
            </div>
          )}
          <p className="detailsDescription">{artwork.description}</p>
          <GradientButton text="Fermer" onClick={() => setArtworkDetails()} />
        </div>
      </div>
    </section>
  );
}

ArtworkDetails.propTypes = {
  artwork: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    create_date: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
  setArtworkDetails: PropTypes.func.isRequired,
};
