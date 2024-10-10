import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import GradientButton from "../components/GradientButton";
import { UserInfoContext } from "../services/context/UserInfoContext";
import { login } from "../services/request";

import logo from "../assets/images/logo_streetArt.svg";
import "../styles/connection.css";

export default function Connection() {
  const { setUserInfo } = useContext(UserInfoContext);
  const [userLogin, setUserLogin] = useState({
    mail: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(userLogin, setUserInfo);
    navigate("/");
  };

  const handleChangeLogin = (event) => {
    const { name, value } = event.target;
    setUserLogin((previousAdd) => ({
      ...previousAdd,
      [name]: value,
    }));
  };

  return (
    <section className="connection">
      <div className="connection_form">
        <div className="connectHeader">
          <img src={logo} alt="Logo" />
          <h2>
            DEVENEZ CHASSEUR <br />
            <span className="headConnexion">D'OEUVRE D'ART</span>
          </h2>
        </div>
        <div className="connectContainerLink">
          <form onSubmit={handleSubmit}>
            <input
              name="mail"
              type="email"
              placeholder="Adresse mail"
              value={setUserLogin.mail}
              onChange={handleChangeLogin}
            />
            <input
              name="password"
              type="password"
              placeholder="Mot de passe"
              value={setUserLogin.password}
              onChange={handleChangeLogin}
            />
            <GradientButton text="Se connecter" type="submit" />
          </form>

          <hr className="connection_separator" />

          <Link to="/" className="connection_without">
            <span className="headConnexion">Continuer en tant qu'invité</span>
          </Link>

          <p className="link_register">
            Vous n'avez pas encore de compte ?{" "}
            <Link to="/register" className="InscriptionLink">
              Inscrivez vous!
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
