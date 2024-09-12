import { useLoaderData } from "react-router-dom";
import { frenchDate } from "../utils/function";
import "../styles/galleryDetails.css";

export default function GalleryDetails() {
  const artwork = useLoaderData();

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
          <li>
            <span className="title-font">Auteur </span>: {artwork.author}
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
          <li>
            <span className="title-font">Ville </span>: {artwork.city}
          </li>
        </ul>
      </div>
    </section>
  );
}
