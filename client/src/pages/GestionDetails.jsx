import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import myAxios from "../services/instanceAxios";
import GradientButton from "../components/GradientButton";

import "../styles/galleryDetails.css";

import { frenchDate } from "../utils/function";

export default function GestionDetails() {
  const artwork = useLoaderData();

  const [modified, setModified] = useState({
    title: artwork.title,
    description: artwork.description,
    isValidated: artwork.isValidated,
    lat: artwork.lat,
    lon: artwork.lon,
    image_url: `${artwork.image_url}`,
    author: artwork.author,
    style_id: 1,
    city_id: 1,
    user_id: 1,
  });

  const sendCredentialsForUpdate = (event) => {
    event.preventDefault();
    myAxios
      .put(`/artworks/${artwork.id}`, modified, { withCredentials: true })
      .then((response) => response.data)
      .catch((error) => console.error(error));
  };
  const handleChangeArtwork = (event) => {
    const { name, value } = event.target;
    setModified((previousAdd) => ({
      ...previousAdd,
      [name]: value,
    }));
  };
  const sendCredentialsForDelete = (event) => {
    event.preventDefault();
    myAxios
      .delete(`/artworks/${artwork.id}`, { withCredentials: true })
      .then((response) => response.data)
      .catch((error) => console.error(error));
  };

  return (
    <section className="galleryDetails">
      <div className="deleteArtwork">
        <GradientButton
          text="Supprimer l'oeuvre"
          type="submit"
          className="deleteArtwork"
          onClick={sendCredentialsForDelete}
        />
      </div>
      <div className="galleryDetailsBody">
        <img
          src={artwork.image_url}
          alt={artwork.title}
          className="detailImage"
        />
        <form onSubmit={sendCredentialsForUpdate}>
          <ul>
            <li>
              <span className="title-font">Auteur </span>: {artwork.author}
              <label htmlFor="Auteur">auteur</label>{" "}
              <input
                type="text"
                placeholder="Auteur*"
                name="pseudo"
                value={modified.pseudo}
                onChange={handleChangeArtwork}
              />
            </li>
            <li>
              <span className="title-font">Pseudo du joueur </span>:{" "}
              {artwork.pseudo}
            </li>
            <li>
              <span className="title-font">Titre </span>: {artwork.title}
              <label htmlFor="Title">Titre</label>{" "}
              <input
                type="text"
                placeholder="Title*"
                name="title"
                value={modified.title}
                onChange={handleChangeArtwork}
              />
            </li>
            <li>
              <span className="title-font">Description </span>:{" "}
              {artwork.description}{" "}
              <label htmlFor="Description">Description</label>{" "}
              <input
                type="text"
                placeholder="Description*"
                name="description"
                value={modified.description}
                onChange={handleChangeArtwork}
              />
            </li>
            <li>
              <span className="title-font">Date de création </span> :{" "}
              {frenchDate(artwork.createDate)}
            </li>
            <li>
              <span className="title-font">Style </span>: {artwork.style}{" "}
              <label htmlFor="Style">style</label>{" "}
              <input
                type="text"
                placeholder="style*"
                name="style"
                value={modified.style}
                onChange={handleChangeArtwork}
              />
            </li>
            <li>
              <span className="title-font">Ville </span>: {artwork.city}{" "}
              <label htmlFor="Ville">Ville</label>{" "}
              <input
                type="text"
                placeholder="Ville*"
                name="city"
                value={modified.city}
                onChange={handleChangeArtwork}
              />
            </li>
            <li>
              <span className="title-font">Validation </span>:{" "}
              <input
                type="text"
                name="validation"
                value={modified.validated}
                onChange={handleChangeArtwork}
                placeholder="0 ou 1"
              />
            </li>
          </ul>
        </form>
        <GradientButton
          text="Valider les changements"
          type="submit"
          onClick={sendCredentialsForUpdate}
        />
      </div>
    </section>
  );
}
