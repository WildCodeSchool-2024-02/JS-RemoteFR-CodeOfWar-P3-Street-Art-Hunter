import { useLoaderData, Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import { useState } from "react";
import NavBar from "../components/NavBar";
import nothingNow from "../assets/images/nothingNow.svg";

import "../styles/gallery.css";
// import Filter from "../assets/images/gallery_filter.svg";

export default function Gallery() {
  const { artworkList, styleArtwork } = useLoaderData();

  const data = artworkList;
  const styles = styleArtwork;

  const [styleFilter, setStyleFilter] = useState("");
  const handleChangeFilter = (event) => setStyleFilter(event.target.value);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 2,
  };

  return (
    <section className="gallery">
      <section className="header-gallery">
        <h1>Galerie</h1>
        <label>
          {" "}
          <select
            value={styleFilter}
            onChange={handleChangeFilter}
            id="artwork-select"
          >
            <option value="">Filtres</option>
            {styles.map((style) => (
              <option key={style.id} value={style.name}>
                {style.name}
              </option>
            ))}
          </select>
        </label>
      </section>
      <section className="body-gallery">
        {data.length === 0 ? (
          <div className="nothing">
            <img src={nothingNow} alt="Pas d'artwork" />
            <p>Aucune oeuvre pour le moment</p>
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {data
              .filter((artwork) =>
                styleFilter ? artwork.style === styleFilter : artwork
              )
              .map((artwork) => (
                <div key={artwork.id}>
                  <Link to={`/gallery/${artwork.id}`}>
                    <img src={artwork.image_url} alt={artwork.title} />
                  </Link>
                </div>
              ))}
          </Masonry>
        )}
      </section>
      <NavBar />
    </section>
  );
}
