import { useLoaderData, Link } from "react-router-dom";
import NavBar from "../components/NavBar";

import "../styles/gallery.css";
import Filter from "../assets/images/gallery_filter.svg";

export default function Gallery() {
  const gallery = useLoaderData();

  console.info(gallery);
  return (
    <section className="gallery">
      <section className="header-gallery">
        <h1>Gallery</h1>
        <label>
          <input type="image" src={Filter} alt="Filtre" value="Filtre" /> Filtre
        </label>
      </section>
      <section className="body-gallery">
        <div className="grid">
          {gallery.map((image) => (
            <div className="grid-item" key={image.id}>
              <Link to={`/gallery/${image.id}`}>
                <img src={image.image_url} alt={image.title} />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <div className="galleryNavbar">
        <NavBar />
      </div>
    </section>
  );
}
