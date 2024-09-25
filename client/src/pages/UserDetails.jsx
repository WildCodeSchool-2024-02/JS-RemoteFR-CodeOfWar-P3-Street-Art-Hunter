import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { frenchDate } from "../utils/function";
import GradientButton from "../components/GradientButton";
import { deleteUser } from "../services/request";

import "../styles/userDetails.css";

export default function UserDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = useLoaderData();
  console.info(user);

  const handleDeleteUser = async () => {
    await deleteUser(user.id);
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      navigate("/gestion");
    }, 2000);
  };

  return (
    <section>
      {" "}
      <div className="gestionDetailsBody">
        <img src={user.avatar} alt={user.pseudo} className="detailImage" />

        <div className="gestion_form">
          <ul>
            <li>
              <span className="title-font">Pseudo </span>: {user.pseudo}
            </li>
            <div className="gestion_form">
              <li>
                <span className="title-font">Date d'inscription </span>:{" "}
                {frenchDate(user.registration_date)}
              </li>
            </div>

            <li>
              <span className="title-font">Score </span>: {user.score}
            </li>
          </ul>
        </div>

        <GradientButton
          text="Supprimer le compte de l'utilisateur"
          type="submit"
          onClick={handleDeleteUser}
        />
        {isOpen && (
          <p className="deleteUser"> Votre compte a bien été supprimé </p>
        )}
      </div>
    </section>
  );
}
