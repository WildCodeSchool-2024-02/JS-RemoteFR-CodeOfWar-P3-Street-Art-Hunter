import { Link } from "react-router-dom";
import { useState } from "react";
import myAxios from "../services/instanceAxios";
import "../styles/register.css";
import logo from "../assets/images/logo_streetArt.svg";
import openEyes from "../assets/images/openEyes.svg";
import closeEyes from "../assets/images/closeEyes.svg";
import GradientButton from "../components/GradientButton";

export default function Register() {
  const [userRegistration, setUserRegistration] = useState({
    pseudo: "",
    mail: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

  const sendCredentials = (event) => {
    event.preventDefault();
    if (userRegistration.password === confirmPassword) {
      myAxios
        .post("/users", userRegistration, { withCredentials: true })
        .then((response) => console.info(response))
        .catch((error) => console.error(error));
    } else {
      window.alert("Les deux mots de passe sont différents!!");
    }
  };

  const handleClickPassword = () => {
    setSeePassword(!seePassword);
  };
  const handleClickConfirm = () => {
    setSeeConfirmPassword(!seeConfirmPassword);
  };

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

  return (
    <section>
      <div className="register">
        <img src={logo} alt="Logo" className="registerLogo" />
        <h2 className="registerTitle">INSCRIPTION</h2>
        <form onSubmit={sendCredentials}>
          <div className="register_form">
            <label htmlFor="Pseudo">Pseudo*</label>
            <input
              type="text"
              placeholder="Pseudo*"
              name="pseudo"
              value={userRegistration.pseudo}
              onChange={handleChangeUser}
            />
          </div>
          <div className="register_form">
            <label htmlFor="Email">Adresse mail*</label>
            <input
              type="email"
              name="mail"
              placeholder="Adresse mail*"
              value={userRegistration.mail}
              onChange={handleChangeUser}
            />
          </div>
          <div className="register_form">
            <label htmlFor="Password">Mot de passe*</label>
            <input
              type={seePassword ? "text" : "password"}
              name="password"
              placeholder="Mot de passe*"
              value={userRegistration.password}
              onChange={handleChangeUser}
              className="inputWithIcon"
            />
            <button
              type="button"
              className="eyes"
              onClick={handleClickPassword}
            >
              <img
                src={seePassword ? openEyes : closeEyes}
                alt="passwordVisible"
              />
            </button>
          </div>
          <div className="register_form">
            <label htmlFor="confirmPassword">
              Confirmez votre mot de passe*
            </label>
            <input
              type={seeConfirmPassword ? "text" : "password"}
              name="confirm_password"
              placeholder="Confirmez votre mot de passe*"
              onChange={handleChangePassword}
              className="inputWithIcon"
            />
            <button type="button" className="eyes" onClick={handleClickConfirm}>
              <img
                src={seeConfirmPassword ? openEyes : closeEyes}
                alt="passwordVisible"
              />
            </button>
          </div>
          <div className="register_form">
            <GradientButton
              text="Créer un compte"
              type="submit"
              onClick={sendCredentials}
            />
          </div>
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
