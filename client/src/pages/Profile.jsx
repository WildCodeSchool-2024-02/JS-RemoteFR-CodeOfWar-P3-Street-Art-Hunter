import { useContext } from "react";
import { useLoaderData, Link, useNavigate } from "react-router-dom";

import { deleteCookie } from "../services/request";
import { UserInfoContext } from "../services/context/UserInfoContext";

import ProfileForm from "../components/ProfileForm";

import GradientButton from "../components/GradientButton";
import Trophy from "../assets/images/profil_trophy.svg";
import "../styles/profile.css";
import myAxios from "../services/instanceAxios";

export default function Profile() {
  const { setUserInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();
  const user = useLoaderData();

  const handleLogout = async () => {
    await deleteCookie();
    setUserInfo(null);
    navigate("/");
  };
  const sendCredential = (event) => {
    event.preventDefault();
    myAxios
      .delete(`users/${user.id}`)
      .then((response) => {
        console.info(response.data);
        window.alert("Votre profil a bien été supprimé");
        navigate("/register");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="profilePage">
      <div className="profileContainer">
        <h1 id="grid-item">Profil</h1>
        <section className="profilSection">
          <img src={user.avatar} alt={user.pseudo} className="profilAvatar" />
          <h2>@{user.pseudo}</h2>
          <p className="profilEmail">{user.mail}</p>
          <Link to={`/profile/ranking/${user.id}`} className="profilClassement">
            <div>
              <img src={Trophy} alt="trophée sur le classement" />
              <p>Classement</p>
            </div>
            <div className="profilScore">
              <p>{user.score}Pts</p>
            </div>
          </Link>
          {user.isAdmin && (
            <Link to="/admin">
              <button type="button" className="adminBtn">
                Gestion
              </button>
            </Link>
          )}
        </section>
      </div>
      <div className="profilFormcontainer">
        <ProfileForm userDetail={user} />
        <GradientButton text="Déconnexion" onClick={handleLogout} />
        <div className="deleteProfil">
          <button type="button" onClick={sendCredential}>
            Supprimer mon compte
          </button>
        </div>
      </div>
    </div>
  );
}
