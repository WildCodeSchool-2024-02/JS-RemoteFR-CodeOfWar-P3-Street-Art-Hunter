import PropTypes from "prop-types";

import GradientButton from "./GradientButton";

import "../styles/styleArtworkDetail.css";

function frenchDate(date) {
  const event = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date
    ? event.toLocaleDateString("fr-FR", options)
    : " Pas d'information";
}

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
            <p>{artwork.style}</p>
          </div>
          <div className="textDetails">
            <p>📅 {frenchDate(artwork.create_date)}</p>
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
    style: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    create_date: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
  setArtworkDetails: PropTypes.func.isRequired,
};
