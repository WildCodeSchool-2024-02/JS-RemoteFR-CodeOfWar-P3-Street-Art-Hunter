import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/NavBar";

import "../styles/gallery.css";
// import Filter from "../assets/images/gallery_filter.svg";

export default function Gallery() {
  const data = useLoaderData();
  console.info(data);
  // const [selection, setSelection] = useState([]);

  // const handleChangeSelection = (event) => {
  //   setSelection(event.target.value);
  // };
  const [currentFilter, setCurrentFilter] = useState("");
  const getFilter = (event) => setCurrentFilter(event.target.value);

  // const filteredArtwork = data.filter((style) =>
  //   selection === "" ? style : style.style === selection
  // );

  /* <input type="image" src={Filter} alt="Filtre" value="Filtres" />{" "}
    Filtres */

  return (
    <section className="gallery">
      <section className="header-gallery">
        <h1>Galerie</h1>
        <label>
          {" "}
          <select onChange={getFilter} id="artwork-select">
            <option value="Filtre">Filtres</option>
            {data?.map((style) => (
              <option key={style.id} value={style.style}>
                {style.style}
              </option>
            ))}
          </select>
        </label>
      </section>
      <section className="body-gallery">
        <div className="grid">
          {data
            .filter((artwork) =>
              currentFilter
                ? artwork.style === currentFilter
                : artwork.image_url
            )
            .map((artwork) => (
              <div className="grid-item" key={artwork.id}>
                <Link to={`/gallery/${artwork.id}`}>
                  <img src={artwork.image_url} alt={artwork.title} />
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
