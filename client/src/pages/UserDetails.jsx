import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { frenchDate } from "../utils/function";
import GradientButton from "../components/GradientButton";
import { deleteUser } from "../services/request";

import "../styles/userDetails.css";

export default function UserDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = useLoaderData();

  const handleDeleteUser = async () => {
    await deleteUser(user.id);
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      navigate("/gestion");
    }, 2000);
  };

  return (
    <section className="userGestion">
      <Link to="/gestion" className="gestionReturn">
        ⬅
      </Link>
      <div className="userGestionBody">
        <img
          src={`${import.meta.env.VITE_API_URL_PICTURE}/avatars/${user.avatar}`}
          alt={user.pseudo}
          className="userImage"
        />

        <div className="userGestion_form">
          <ul>
            <li>
              <span className="title-font">Pseudo </span>: {user.pseudo}
            </li>
            <li>
              <span className="title-font">Email </span>: {user.mail}
            </li>
            <li>
              <span className="title-font">Date d'inscription </span>:{" "}
              {frenchDate(user.registration_date)}
            </li>
            <li>
              <span className="title-font">Score </span>: {user.score}
            </li>
          </ul>
        </div>
        <GradientButton
          text="Supprimer le compte de l'utilisateur"
          onClick={handleDeleteUser}
        />
        {isOpen && (
          <p className="deleteUser">
            {" "}
            Le compte de l'utilisateur a bien été supprimé{" "}
          </p>
        )}
      </div>
    </section>
  );
}
