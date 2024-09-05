import { useLoaderData } from "react-router-dom";

import "../styles/galleryDetails.css";

export default function GalleryDetails() {
  const artwork = useLoaderData();
  console.info(artwork);

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
          <li>Auteur : {artwork.author}</li>
          <li>Description : {artwork.description}</li>
          <li>Date de création : {frenchDate(artwork.create_date)}</li>
          <li>Style : {artwork.style}</li>
          <li>Ville : {artwork.city}</li>
        </ul>
      </div>
    </section>
  );
}
