import { useLoaderData, Link } from "react-router-dom";
import ProfileForm from "../components/ProfileForm";

import Trophy from "../assets/images/profil_trophy.svg";
import "../styles/profile.css";

export default function Profile() {
  const user = useLoaderData();
  return (
    <div className="profilePage">
      <div className="profileContainer">
        <h1 className="grid-item">Profil</h1>
        <section className="profilSection">
          <img src={user.avatar} alt={user.pseudo} className="profilAvatar" />
          <h2>{user.pseudo}</h2>
          <p className="profilEmail">{user.mail}</p>
          <Link to={`/profile/ranking/${user.id}`} className="profilClassement">
            <img src={Trophy} alt="trophée sur le classement" />
            <p>Classement</p>
            <div className="profilScore">
              <p>{user.score}Pts</p>
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
