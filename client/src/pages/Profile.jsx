import { useLoaderData } from "react-router-dom";
import ProfileForm from "../components/ProfileForm";

import "../styles/profile.css";
import Trophy from "../assets/images/profil_trophy.svg";

export default function Profile() {
  const user = useLoaderData().result;
  return (
    <div className="profilePage">
      <div className="profileContainer">
        <h1 className="grid-item">Profil</h1>
        <section className="profilSection">
          <img src={user.avatar} alt={user.pseudo} className="profilAvatar" />
          <h2>{user.pseudo}</h2>
          <p className="profilEmail">{user.mail}</p>
          <div className="profilClassement">
            <img src={Trophy} alt="trophée sur le classement" />
            <p>Classement</p>
            <div>
              <p>0</p>
            </div>
          </div>
        </section>
      </div>
      <div className="profilFormcontainer">
        <ProfileForm userDetail={user} />
      </div>
    </div>
  );
}
