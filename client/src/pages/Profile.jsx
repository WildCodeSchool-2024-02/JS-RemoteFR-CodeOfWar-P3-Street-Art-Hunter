import { useLoaderData } from "react-router-dom";
import ProfileForm from "../components/ProfileForm";
import "../styles/profile.css";

export default function Profile() {
  const user = useLoaderData();
  console.info(user);
  return (
    <div className="profilePage">
      <div className="profiltitle">
        <h2>Profil</h2>
      </div>
      <section className="profilContainer">
        <img src={user.avatar} alt={user.pseudo} className="avatar" />
        <h2>{user.pseudo}</h2>
        <p>{user.mail}</p>
      </section>
      <div className="profilFormcontainer">
        <ProfileForm userDetail={user} />
      </div>
    </div>
  );
}
