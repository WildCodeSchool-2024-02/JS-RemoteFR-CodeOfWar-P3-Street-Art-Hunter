import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { frenchDate } from "../utils/function";
import "../styles/galleryDetails.css";

export default function GalleryDetails() {
  const artwork = useLoaderData();
  const [message, setMessage] = useState("");

  const handleMouseOver = (e) => {
    e.preventDefault();
    if (artwork.isValidated === 1) {
      setMessage("validée");
    } else {
      setMessage("en attente de validation");
    }
  };

  const handleMouseOut = (e) => {
    e.preventDefault();
    setMessage("");
  };

  return (
    <section className="galleryDetails">
      <h1>{artwork.title}</h1>
      <div className="galleryDetailsBody">
        <img
          src={artwork.image_url}
          alt={artwork.title}
          className="detailImage"
        />

        <ul>
          <li className="galleryArtIsValidated">
            <p>
              <span className="title-font">Auteur </span>: {artwork.author}
            </p>
            {artwork.isValidated === 1 ? (
              <button
                type="button"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
                onFocus={handleMouseOver}
                onBlur={handleMouseOut}
                className="buttonGalleryValidated"
              >
                🟢 {message}
              </button>
            ) : (
              <button
                type="button"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
                onFocus={handleMouseOver}
                onBlur={handleMouseOut}
                className="buttonGalleryValidated"
              >
                🟠 {message}
              </button>
            )}
          </li>
          <li>
            <span className="title-font">Description </span>:{" "}
            {artwork.description}
          </li>
          <li>
            <span className="title-font">Date de création </span> :{" "}
            {frenchDate(artwork.create_date)}
          </li>
          <li>
            <span className="title-font">Style </span>: {artwork.style}
          </li>
        </ul>
      </div>
    </section>
  );
}
