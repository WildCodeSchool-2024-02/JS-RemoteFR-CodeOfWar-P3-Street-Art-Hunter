import { useLoaderData, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import myAxios from "../services/instanceAxios";
import GradientButton from "../components/GradientButton";

import "../styles/gestionDetails.css";

import { frenchDate } from "../utils/function";

export default function GestionDetails() {
  const artwork = useLoaderData();
  const navigate = useNavigate();

  const [modified, setModified] = useState({
    title: artwork.title,
    description: artwork.description,
    isValidated: artwork.isValidated,
    lat: artwork.lat,
    lon: artwork.lon,
    image_url: `${artwork.image_url}`,
    author: artwork.author,
    style_id: 1,
    user_id: 1,
  });

  const sendCredentialsForUpdate = (event) => {
    event.preventDefault();
    myAxios
      .put(`/artworks/${artwork.id}`, modified, { withCredentials: true })
      .then((response) => {
        console.info(response.data);
        window.alert("L'artwork a bien été modifié!!");
        navigate("/gestion");
      })
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
      .then((response) => {
        console.info(response.data);
        window.alert("L'artwork a bien été supprimé!!");
        navigate("/gestion");
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="gestionDetails">
      <Link to="/gestion" className="gestionReturn">
        Retour à la page gestion
      </Link>
      <div className="gestionDetailsBody">
        <img
          src={artwork.image_url}
          alt={artwork.title}
          className="detailImage"
        />
        <form onSubmit={sendCredentialsForUpdate}>
          <div className="gestion_form">
            <ul>
              <li>
                <span className="title-font">Auteur </span>: {artwork.author}
                <label htmlFor="Auteur">Modification de l'auteur</label> <br />
                <div className="gestion_form">
                  <input
                    type="text"
                    placeholder="Modification de l'auteur*"
                    name="author"
                    value={modified.author}
                    onChange={handleChangeArtwork}
                  />
                </div>
              </li>
              <div className="gestion_form">
                <li>
                  <span className="title-font">Pseudo du joueur </span>:{" "}
                  {artwork.pseudo}
                </li>
              </div>

              <li>
                <span className="title-font">Titre </span>: {artwork.title}
                <label htmlFor="Title">Modification du titre</label> <br />
                <div className="gestion_form">
                  <input
                    type="text"
                    placeholder="Modification du titre*"
                    name="title"
                    value={modified.title}
                    onChange={handleChangeArtwork}
                  />
                </div>
              </li>

              <li>
                <span className="title-font">Description </span>:{" "}
                {artwork.description}{" "}
                <label htmlFor="Description">
                  Modification de la description
                </label>{" "}
                <br />
                <div className="gestion_form">
                  <input
                    type="text"
                    placeholder="Modification de la description*"
                    name="description"
                    value={modified.description}
                    onChange={handleChangeArtwork}
                  />{" "}
                </div>
              </li>

              <li>
                <span className="title-font">Date de création </span> :{" "}
                {frenchDate(artwork.create_date)}
              </li>

              <li>
                <span className="title-font">Style </span>: {artwork.style}{" "}
                <label htmlFor="Style">Modification du style</label> <br />
                <div className="gestion_form">
                  <input
                    type="text"
                    placeholder="Modification du style*"
                    name="style"
                    value={modified.style}
                    onChange={handleChangeArtwork}
                  />{" "}
                </div>
              </li>

              <li>
                <span className="title-font">Validation </span>:{" "}
                <div className="gestion_form">
                  <input
                    type="text"
                    name="isValidated"
                    value={modified.isValidated ? 0 : 1}
                    onChange={handleChangeArtwork}
                    placeholder="0 ou 1"
                  />
                </div>
              </li>
            </ul>
          </div>
        </form>
        <div className="gestionButton">
          <GradientButton
            text="Valider les changements"
            type="submit"
            onClick={sendCredentialsForUpdate}
          />
          <hr className="connection_separator" />
          <GradientButton
            text="Supprimer l'oeuvre"
            type="submit"
            className="deleteArtwork"
            onClick={sendCredentialsForDelete}
          />
        </div>
      </div>
    </section>
  );
}
