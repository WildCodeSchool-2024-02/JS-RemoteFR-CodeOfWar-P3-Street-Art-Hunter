import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";

import GradientButton from "./GradientButton";

export default function CameraForm({
  artworkProperties,
  handleChangeProperties,
  uploadPhoto,
}) {
  const data = useLoaderData();
  console.info(artworkProperties.lat, artworkProperties, 1);
  return (
    <>
      <label htmlFor="picture_style">Type*</label>
      <select
        className="dropdown_Style"
        name="style_id"
        value={artworkProperties.style_id}
        onChange={handleChangeProperties}
      >
        <option value={0}>Selectionner un type</option>
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

      <label htmlFor="picture_description">Description</label>
      <textarea
        rows="5"
        name="description"
        value={artworkProperties.description}
        onChange={handleChangeProperties}
      />
      <GradientButton text="Ajouter une œuvre" onClick={uploadPhoto} />
    </>
  );
}

CameraForm.propTypes = {
  artworkProperties: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    lat: PropTypes.string.isRequired,
    lon: PropTypes.string.isRequired,
    author: PropTypes.string,
    style_id: PropTypes.number,
    user_id: PropTypes.number,
  }).isRequired,
  handleChangeProperties: PropTypes.func.isRequired,
  uploadPhoto: PropTypes.func.isRequired,
};
