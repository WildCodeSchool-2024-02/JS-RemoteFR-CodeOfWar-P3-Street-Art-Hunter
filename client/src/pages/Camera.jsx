import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import { sendArtwork } from "../services/request";

import myAxios from "../services/instanceAxios";

import GradientButton from "../components/GradientButton";

import "../styles/styleGradientButton.css";
import "../styles/camera.css";

export default function Camera() {
  const [artworkProperties, setArtworkProperties] = useState({
    title: "",
    description: "",
    image_url: `${myAxios}/assets/images/test.jpg`,
    lat: 48.8466,
    lon: 2.3122,
    author: "",
    style_id: 0,
    city_id: 1,
    user_id: 1,
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
          <div className="form_file_upload">
            <label htmlFor="form_file_input" className="form_custom_file_label">
              + Ajouter une photo
            </label>
            <input
              type="file"
              id="form_file_input"
              className="form_file_input"
              accept="image/png, image/jpeg"
              value={artworkProperties.picture}
              onChange={handleChangeProperties}
            />
          </div>
        </div>

        <h1>Post</h1>
        <label htmlFor="picture_date">Date</label>
        <input type="text" value={datePicture} readOnly />
        <label htmlFor="picture_style">Type*</label>
        <select
          className="dropdown_Style"
          name="style_id"
          value={artworkProperties.style_id}
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
          name="description"
          value={artworkProperties.description}
          onChange={handleChangeProperties}
        />

        <GradientButton
          text="Ajouter une œuvre"
          type="submit"
          onClick={() => sendArtwork(artworkProperties)}
        />
      </form>
    </section>
  );
}
