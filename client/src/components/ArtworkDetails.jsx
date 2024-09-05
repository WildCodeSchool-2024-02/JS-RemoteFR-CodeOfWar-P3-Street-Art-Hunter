import PropTypes from "prop-types";

import GradientButton from "./GradientButton";

import "../styles/styleArtworkDetail.css";

export default function ArtworkDetails({ artwork, setArtworkDetails }) {

  return (
    <section className="detailsContaineur">
      <div className="detailsContain">
        <img
          src={artwork.image_url}
          alt={artwork.title}
          className="detailsImg"
        />
        <div className="textDetailsContainer">
          <div className="textDetails">
            <p>{artwork.title}</p>
            <p>{artwork.author}</p>
          </div>
          <div className="textDetails">
            <p>📅 {artwork.create_date}</p>
            <p>
              📍 {artwork.lat}, {artwork.lon}
            </p>
          </div>
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
