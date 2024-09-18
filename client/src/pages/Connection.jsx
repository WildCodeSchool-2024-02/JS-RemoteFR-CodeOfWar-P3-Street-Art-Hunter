import { Link } from "react-router-dom";

import GradientButton from "../components/GradientButton";
import "../styles/connection.css";

import logo from "../assets/images/logo_streetArt.svg";

export default function Connection() {
  // const userLogin = useLoaderData();
  // console.info("userlogin", userLogin);

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
          <input type="email" placeholder="Adresse mail" />
          <input type="password" placeholder="Mot de passe" />
          <div className="connectGradientBtn">
            <GradientButton text="Se connecter" type="submit" />
          </div>
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
