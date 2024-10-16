import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import GradientButton from "./GradientButton";
import useScreenWidth from "../utils/hook/useScreenWidth";
import { UserInfoContext } from "../services/context/UserInfoContext";
import {
  getCityName,
  getFavorites,
  postFavorites,
  updateScore,
} from "../services/request";
import { frenchDate } from "../utils/function";

import "../styles/styleArtworkDetail.css";

export default function ArtworkDetails({ artwork, setArtworkDetails }) {
  const artworkUrl = `${import.meta.env.VITE_API_URL_PICTURE}/${artwork.image_url}`;
  const { userInfo } = useContext(UserInfoContext);
  const screenWidth = useScreenWidth();
  const [artworkLocation, setArtworkLocation] = useState();
  const [favorites, setFavorites] = useState();
  const [isAlreadyCheck, setIsAlreadyCheck] = useState(false);

  const HandleUpdateScore = () => {
    updateScore(userInfo.id, 100);
    postFavorites(artwork.id);
    setIsAlreadyCheck(true);
  };

  useEffect(() => {
    if (artwork.lat) {
      getCityName(artwork.lat, artwork.lon, setArtworkLocation);
      if (userInfo) {
        getFavorites(userInfo.id, setFavorites);
      }
    }
  }, [artwork.lat, artwork.lon, userInfo]);

  useEffect(() => {
    if (favorites) {
      const artworkCheck = favorites.some(
        (favorite) => favorite.artwork_id === artwork.id
      );
      setIsAlreadyCheck(artworkCheck);
    }
  }, [favorites]);
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
          {screenWidth < 480 && userInfo && !isAlreadyCheck && (
            <div className="btnPointsElement">
              <GradientButton text="+" onClick={HandleUpdateScore} />
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
