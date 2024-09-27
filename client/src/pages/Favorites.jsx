import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Masonry from "react-masonry-css";

import { getFavorites } from "../services/request";
import "../styles/styleFavorites.css";

export default function Favorites() {
  const { artworks, user } = useLoaderData();
  const [data, setData] = useState();

  useEffect(() => {
    getFavorites(user.id, setData);
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 2,
  };
  return (
    <section className="favoriteContainer">
      <header>
        <h1>Favoris</h1>
        <p className="textFavorite">
          {" "}
          {data && data.length}/{artworks.length} Street art trouvées !
        </p>
      </header>
      <div className="mansoryContainer">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data &&
            data?.map((favorite) =>
              artworks.map(
                (artwork) =>
                  favorite.artwork_id === artwork.id && (
                    <div key={artwork.id}>
                      <Link to={`/gallery/${artwork.id}`}>
                        <img src={artwork.image_url} alt={artwork.title} />
                      </Link>
                    </div>
                  )
              )
            )}
        </Masonry>
      </div>
    </section>
  );
}
