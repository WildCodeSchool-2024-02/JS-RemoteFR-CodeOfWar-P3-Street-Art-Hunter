import { useLoaderData, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";

import { getArtworksByStyle } from "../services/request";

import nothingNow from "../assets/images/nothingNow.svg";
import "../styles/gallery.css";

export default function Gallery() {
  const { artworkList, styleArtwork } = useLoaderData();

  const [stylesArtwork, setStylesArtwork] = useState({
    style_id: "",
  });

  const [artworks, setArtworks] = useState();

  useEffect(() => {
    getArtworksByStyle(stylesArtwork, setArtworks);
  }, [stylesArtwork]);

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
            name="style_id"
            onChange={(event) => setStylesArtwork(event.target.value)}
            value={stylesArtwork.style_id}
          >
            <option value="">Filtres</option>
            {styleArtwork?.map((style) => (
              <option key={style.id} value={style.id}>
                {style.name}
              </option>
            ))}
          </select>
        </label>
      </section>
      <section className="body-gallery">
        {artworkList.length === 0 ? (
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
            {artworks?.length === 0 ? (
              <div className="nothing">
                <img src={nothingNow} alt="Pas d'artwork" />
                <p>
                  Aucune oeuvre de ce style n'a été enregistré pour le moment
                </p>
              </div>
            ) : (
              artworks?.map((artwork) => (
                <div key={artwork.id}>
                  <Link to={`/gallery/${artwork.id}`}>
                    <img
                      src={`${import.meta.env.VITE_API_URL_PICTURE}/${artwork.image_url}`}
                      alt={artwork.title}
                    />
                  </Link>
                </div>
              ))
            )}
          </Masonry>
        )}
      </section>
    </section>
  );
}
