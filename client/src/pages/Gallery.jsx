import { useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";

import "../styles/gallery.css";

export default function Gallery() {
  const gallery = useLoaderData();

  console.info(gallery);
  return (
    <>
      <section className="header-gallery">
        <h1>Gallery</h1>
        <input type="button" value="Filtre" />
      </section>
      <section className="body-gallery">
        <div className="grid">
          {gallery.map((image) => (
            <div className="grid-item" key={image.id}>
              <img src={image.image_url} alt={image.title} />
            </div>
          ))}
        </div>
      </section>
      <div className="galleryNavbar">
        <NavBar />
      </div>
    </>
  );
}
