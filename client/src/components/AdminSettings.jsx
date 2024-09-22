import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myAxios from "../services/instanceAxios";

function Validation() {
  const [artworks, setArtworks] = useState([]);

  const getValidated = (id) => {
    myAxios
      .get(`/artworks/validate/${id}`)
      .then((response) => setArtworks(response.data))
      .catch((error) => console.error(error));
  };

  // const sendCredentials = (id) => {
  //   myAxios
  //     .put(`/artworks/${id}`, updateArtwork, { withCredentials: true })
  //     .then((response) => console.info(response))
  //     .catch((error) => console.error(error));
  // };
  useEffect(() => {
    getValidated();
  }, []);
  // const handleClickStatus = () => {
  //   setValidated(!validated);
  // };

  // const handleChangeArtwork = (event) => {
  //   const { name, value } = event.target;
  //   setUpdateArtwork((previousAdd) => ({
  //     ...previousAdd,
  //     [name]: value,
  //   }));
  // };
  // console.info("coucou", handleChangeArtwork);
  console.info(artworks);
  return (
    <section>
      {artworks.length > 0 ? (
        artworks.map((artwork) => (
          <section className="validation" key={artwork.id}>
            <div>
              <Link to={`/gestion/${artwork.id}`}>
                <img
                  src={artwork.image_url}
                  alt={artwork.title}
                  className="imageValidate"
                />
              </Link>
            </div>
            <div>
              <div className="informationValidate">
                <ul>
                  <li>
                    <span className="title-font">Pseudo du joueur </span>:{" "}
                    {artwork.pseudo}
                  </li>
                  <li>
                    <span className="title-font"> Titre </span>: {artwork.title}
                  </li>
                  <li>
                    <span className="title-font">Description </span>:{" "}
                    {artwork.description}
                  </li>

                  <li>
                    <span className="title-font"> Style </span>: {artwork.style}{" "}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        ))
      ) : (
        <p>Il n'y a pas d'oeuvre à valider pour le moment.</p>
      )}
    </section>
  );
}
function Contact() {
  return <h1>Coucou de contact</h1>;
}
export { Validation, Contact };
