import { Link } from "react-router-dom";
import { useState } from "react";
import myAxios from "../services/instanceAxios";
import "../styles/register.css";
import logo from "../assets/images/logo_streetArt.svg";
import GradientButton from "../components/GradientButton";

export default function Register() {
  const [userRegistration, setUserRegistration] = useState({
    pseudo: "",
    mail: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangeUser = (event) => {
    const { name, value } = event.target;
    setUserRegistration((previousAdd) => ({
      ...previousAdd,
      [name]: value,
    }));
  };

  const handleChangePassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const sendCredentials = (event) => {
    event.preventDefault();
    if (userRegistration.password === confirmPassword) {
      myAxios
        .post("/users", userRegistration, { withCredentials: true })
        .then((response) => console.info(response))
        .catch((error) => console.error(error));
    } else {
      window.alert("Les deux mots de passe sont différents");
    }
  };

  return (
    <section>
      <div className="register">
        <img src={logo} alt="Logo" className="registerLogo" />
        <h2 className="registerTitle">INSCRIPTION</h2>
        <form className="register_form" onSubmit={sendCredentials}>
          <input
            type="text"
            placeholder="Pseudo*"
            name="pseudo"
            value={userRegistration.pseudo}
            onChange={handleChangeUser}
          />
          <input
            type="email"
            name="mail"
            placeholder="Adresse mail*"
            value={userRegistration.mail}
            onChange={handleChangeUser}
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe*"
            value={userRegistration.password}
            onChange={handleChangeUser}
          />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirmez votre mot de passe*"
            onChange={handleChangePassword}
          />
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
