import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import { sendArtwork } from "../services/request";

import GradientButton from "../components/GradientButton";

// import defaultPicture from "../assets/images/camera_illustration_default.svg";
import defaultPicture2 from "../assets/images/camera_illustration_default2.jpg";
import updatePicture from "../assets/images/camera_changePicture.svg";

import "../styles/styleGradientButton.css";
import "../styles/camera.css";

export default function Camera() {
  const [artworkProperties, setArtworkProperties] = useState({
    title: "",
    description: "",
    picture: "",
    lat: "",
    lon: "",
    author: "",
    style: "",
  });

  const handleChangeProperties = (event) => {
    const { name, value } = event.target;
    setArtworkProperties((previousAdd) => ({
      ...previousAdd,
      [name]: value,
    }));
  };

  const datePicture = new Date().toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const data = useLoaderData();

  return (
    <section>
      <form action="" method="post" className="form_camera">
        <div className="form_container_picture">
          <img src={defaultPicture2} alt="artwork" className="picture_camera" />
          <img src={updatePicture} alt="update" className="picture_update" />
        </div>
        <input
          type="file"
          name="picture"
          className="picture_upload"
          accept="image/png, image/jpeg"
          value={artworkProperties.picture}
          onChange={handleChangeProperties}
        />
        <label htmlFor="picture_date">Date</label>
        <input type="text" value={datePicture} readOnly />
        <label htmlFor="picture_style">Type*</label>
        <select
          className="dropdown_Style"
          name="style"
          value={artworkProperties.style}
          onChange={handleChangeProperties}
        >
          <option value="">Selectionner un type</option>
          {data?.map((style) => (
            <option key={style.id} value={style.id}>
              {style.name}
            </option>
          ))}
        </select>
        <label htmlFor="picture_title">Titre*</label>
        <input
          type="text"
          name="title"
          value={artworkProperties.title}
          onChange={handleChangeProperties}
        />
        <label htmlFor="picture_author">Auteur</label>
        <input
          type="text"
          name="author"
          value={artworkProperties.author}
          onChange={handleChangeProperties}
        />
        <label htmlFor="picture_location">Lieu*</label>
        <input
          type="text"
          value={artworkProperties.lat}
          onChange={handleChangeProperties}
        />
        <label htmlFor="picture_description">Description</label>
        <textarea
          rows="5"
          value={artworkProperties.description}
          onChange={handleChangeProperties}
        />
        <GradientButton
          text="Ajouter une œuvre"
          type="submit"
          onClick={sendArtwork}
        />
      </form>
    </section>
  );
}
