import { Link } from "react-router-dom";
import { useState } from "react";
import myAxios from "../services/instanceAxios";
import "../styles/register.css";
import logo from "../assets/images/logo_streetArt.svg";
import GradientButton from "../components/GradientButton";

export default function Register() {
  const [userInscription, setUserInscription] = useState({
    pseudo: "",
    mail: "",
    password: "",
  });

  const handleChangeUser = (event) => {
    const { name, value } = event.target;
    setUserInscription((previousAdd) => ({
      ...previousAdd,
      [name]: value,
    }));
  };
  const sendCredentials = (event) => {
    event.preventDefault();
    myAxios
      .post("/users", userInscription, { withCredentials: true })
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  };

  return (
    <section>
      <div className="register">
        <img src={logo} alt="Logo" />
        <h2 className="registerTitle">INSCRIPTION</h2>
        <form className="register_form" onSubmit={sendCredentials}>
          <input
            type="text"
            placeholder="Pseudo*"
            name="pseudo"
            value={userInscription.pseudo}
            onChange={handleChangeUser}
          />
          {/* <input type="text" placeholder="Ville" /> */}
          <input
            type="email"
            name="mail"
            placeholder="Adresse mail*"
            value={userInscription.mail}
            onChange={handleChangeUser}
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe*"
            value={userInscription.password}
            onChange={handleChangeUser}
          />
          {/* <input type="password" placeholder="Confirmez votre mot de passe*" /> */}

          <GradientButton
            text="Créer un compte"
            type="submit"
            className="registerSubmit"
            onClick={sendCredentials}
          />

          <p className="linkRegister">
            Déjà un compte ?{" "}
            <Link to="/connection" className="InscriptionLink">
              Connectez-vous!
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
