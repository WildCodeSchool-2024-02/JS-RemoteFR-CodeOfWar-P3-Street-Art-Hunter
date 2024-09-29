import { useLoaderData, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";

import { getArtworksByStyle } from "../services/request";
import nothingNow from "../assets/images/nothingNow.svg";
import "../styles/gallery.css";

export default function Gallery() {
  const { artworkList, styleArtwork } = useLoaderData();

  const [stylesArtwork, setStylesArtwork] = useState(null);
  const [artworks, setArtworks] = useState();
  const [isVisibled, setIsVisibled] = useState(false);

  useEffect(() => {
    getArtworksByStyle(stylesArtwork, setArtworks);
    setTimeout(() => setIsVisibled(true), 500);
  }, [stylesArtwork]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 2,
  };
  console.info(stylesArtwork);
  return (
    <section className="gallery">
      <section className="header-gallery">
        <h1 className={isVisibled && "show"}>Galerie</h1>
        <div>
          <button
            type="button"
            className={!stylesArtwork ? "chip chipActive" : "chip"}
            onClick={() => setStylesArtwork()}
          >
            Tous
          </button>
          {styleArtwork?.map((style) => (
            <button
              type="button"
              key={style.id}
              className={
                stylesArtwork === style.id ? "chip chipActive" : "chip"
              }
              onClick={() => setStylesArtwork(style.id)}
            >
              {style.name}
            </button>
          ))}
        </div>
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
