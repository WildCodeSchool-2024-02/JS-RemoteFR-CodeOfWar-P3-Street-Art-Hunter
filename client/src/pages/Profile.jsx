import { useLoaderData, Link } from "react-router-dom";
import ProfileForm from "../components/ProfileForm";

import "../styles/profile.css";
import Trophy from "../assets/images/profil_trophy.svg";

export default function Profile() {
  const user = useLoaderData();

  return (
    <div className="profilePage">
      <div className="profileContainer">
        <h2 className="grid-item">Profil</h2>
        <section className="profilSection">
          <img src={user.avatar} alt={user.pseudo} className="profilAvatar" />
          <h3>{user.pseudo}</h3>
          {/* {user.isAdmin === 1 ? (
            <Link to="/admin">
              <button type="button" className="profile_isadmin">
                Gestion
              </button>
            </Link>
          ) : (
            ""
          )} */}
          <p className="profilEmail">{user.mail}</p>
          <Link to="/profile/ranking/1" className="profilClassement">
            <img src={Trophy} alt="trophée sur le classement" />
            <p>Classement</p>
            <div>
              <p>0</p>
            </div>
          </Link>
        </section>
      </div>
      <div className="profilFormcontainer">
        <ProfileForm userDetail={user} />
      </div>
    </div>
  );
}
