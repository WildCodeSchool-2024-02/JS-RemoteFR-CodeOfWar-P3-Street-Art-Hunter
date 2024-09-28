import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { frenchDate } from "../utils/function";
import GradientButton from "./GradientButton";

function Validation({ artworks }) {
  return (
    <section>
      {artworks && artworks.length > 0 ? (
        artworks.map((artwork) => (
          <section className="validation" key={artwork.id}>
            <div>
              <img
                src={`${import.meta.env.VITE_API_URL_PICTURE}/${artwork.image_url}`}
                alt={artwork.title}
                className="imageValidate"
              />
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
            <div className="checkArtworkBtn">
              <Link to={`/userDetails/${artwork.id}`}>
                <GradientButton text="Vérification" />
              </Link>
            </div>
          </section>
        ))
      ) : (
        <p>Il n'y a pas d'oeuvre à valider pour le moment.</p>
      )}
    </section>
  );
}
function Hunters({ users }) {
  return (
    <section>
      {users && users.length > 0 ? (
        users.map((user) => (
          <section className="userList" key={user.id}>
            <div className="imageUser">
              <img
                src={`${import.meta.env.VITE_API_URL_PICTURE}/avatars/${user.avatar}`}
                alt={user.pseudo}
                className="avatarUser"
              />
            </div>
            <div>
              <div className="informationUser">
                <ul>
                  <li>
                    <span className="title-font">Pseudo du joueur </span>:{" "}
                    {user.pseudo}
                  </li>
                  <li>
                    <span className="title-font"> Mail </span>: {user.mail}
                  </li>
                  <li>
                    <span className="title-font">Date d'inscription </span>:{" "}
                    {frenchDate(user.registration_date)}
                  </li>

                  <li>
                    <span className="title-font"> Score </span>: {user.score}{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="checkArtworkBtn">
              <Link to={`/userDetails/${user.id}`}>
                <GradientButton text="Vérification" />
              </Link>
            </div>
          </section>
        ))
      ) : (
        <p>Il n'y a pas de joueur pour le moment.</p>
      )}
    </section>
  );
}
function Contact() {
  return <h1>Coucou de contact</h1>;
}
export { Validation, Hunters, Contact };

Validation.propTypes = {
  artworks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image_url: PropTypes.string,
    })
  ).isRequired,
};
Hunters.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      pseudo: PropTypes.string.isRequired,
      mail: PropTypes.string.isRequired,
      registration_date: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
};
