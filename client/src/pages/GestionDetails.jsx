import { useLoaderData, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import {
  updateArtwork,
  deleteArtwork,
  deleteFavorite,
} from "../services/request";
import GradientButton from "../components/GradientButton";

import "../styles/gestionDetails.css";

import { frenchDate } from "../utils/function";

export default function GestionDetails() {
  const { artwork, styles } = useLoaderData();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState("");
  const filterStyle = styles.find((style) => {
    if (style.name === artwork.style) {
      return style;
    }
    return null;
  });

  const [modified, setModified] = useState({
    title: artwork.title,
    description: artwork.description,
    isValidated: 1,
    lat: artwork.lat,
    lon: artwork.lon,
    image_url: `${artwork.image_url}`,
    author: artwork.author,
    style_id: filterStyle.id,
  });

  const sendCredentialsForUpdate = async (event) => {
    event.preventDefault();
    await updateArtwork(artwork.id, modified);
    setIsOpen("modified");
    setTimeout(() => {
      setIsOpen("");
      navigate("/gestion");
    }, 2000);
  };

  const handleChangeArtwork = (event) => {
    const { name, value } = event.target;
    setModified((previousAdd) => ({
      ...previousAdd,
      [name]: value,
    }));
  };

  const handleDeleteArtwork = async () => {
    await deleteFavorite(artwork.id);
    await deleteArtwork(artwork.id);
    setIsOpen("delete");
    setTimeout(() => {
      setIsOpen("");
      navigate("/gestion");
    }, 2000);
  };

  return (
    <section className="gestionDetails">
      <Link to="/gestion" className="gestionReturn">
        ⬅
      </Link>
      <div className="gestionDetailsBody">
        <img
          src={`${import.meta.env.VITE_API_URL_PICTURE}/${artwork.image_url}`}
          alt={artwork.title}
          className="detailImage"
        />
        <form>
          <div className="gestion_form">
            <ul>
              <div className="gestion_form">
                <li>
                  <span className="title-font">Pseudo du joueur </span>:{" "}
                  {artwork.pseudo}
                </li>
              </div>
              <li>
                <span className="title-font">Date de création </span> :{" "}
                {frenchDate(artwork.create_date)}
              </li>
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
                <span className="title-font">Style </span>: {artwork.style}{" "}
                <label htmlFor="Style">Modification du style</label> <br />
                <div className="gestion_form">
                  <select
                    className="dropdown_Style"
                    name="style_id"
                    value={modified.style_id}
                    onChange={handleChangeArtwork}
                  >
                    <option value={0}>Selectionner un type</option>
                    {styles?.map((style) => (
                      <option key={style.id} value={style.id}>
                        {style.name}
                      </option>
                    ))}
                  </select>
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
          {isOpen === "modified" && (
            <p className="deleteUser"> L'arwork a bien été modifié </p>
          )}
          <GradientButton
            text="Supprimer l'oeuvre"
            type="submit"
            className="deleteArtwork"
            onClick={handleDeleteArtwork}
          />
          {isOpen === "delete" && (
            <p className="deleteUser"> L'arwork a bien été supprimé </p>
          )}
        </div>
      </div>
    </section>
  );
}
