import { useLoaderData, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import myAxios from "../services/instanceAxios";
import nothingNow from "../assets/images/nothingNow.svg";

import "../styles/gallery.css";

export default function Gallery() {
  const { artworkList, styleArtwork } = useLoaderData();

  const data = artworkList;
  const styles = styleArtwork;

  const [stylesArtwork, setStylesArtork] = useState({
    style_id: "",
  });

  const handleChangeFilter = (event) => setStylesArtork(event.target.value);

  const [artworks, setArtworks] = useState();

  const getArtworks = (style) => {
    myAxios
      .get(stylesArtwork.length > 0 ? `/artworks?q=${style}` : "/artworks")
      .then((response) => setArtworks(response.data))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getArtworks(parseInt(stylesArtwork, 10));
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
            onChange={handleChangeFilter}
            // id="artwork-select"
            value={stylesArtwork.style_id}
          >
            <option value="">Filtres</option>
            {styles?.map((style) => (
              <option key={style.id} value={style.id}>
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
            {artworks?.length === 0 ? (
              <div className="nothing">
                <img src={nothingNow} alt="Pas d'artwork" />
                <p>Aucune oeuvre pour le moment</p>
              </div>
            ) : (
              artworks?.map((artwork) => (
                <div key={artwork.id}>
                  <Link to={`/gallery/${artwork.id}`}>
                    <img src={artwork.image_url} alt={artwork.title} />
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
