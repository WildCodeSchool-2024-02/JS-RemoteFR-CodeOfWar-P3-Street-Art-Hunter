import { Link } from "react-router-dom";

import GradientButton from "../components/GradientButton";
import "../styles/connection.css";

import background from "../assets/images/backgroundOnboarding.svg";
import logo from "../assets/images/logo_streetArt.svg";

export default function Connection() {
  // const userLogin = useLoaderData();
  // console.info("userlogin", userLogin);

  return (
    <section className="connection">
      <div
        className="connection_form"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <img src={logo} alt="Logo" />
        <h2>
          DEVENEZ CHASSEUR <br />
          <span className="headConnexion">D'OEUVRE D'ART</span>
        </h2>

        <input type="email" placeholder="Adresse mail" />
        <input type="password" placeholder="Mot de passe" />

        <GradientButton text="Se connecter" type="submit" />

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
    </section>
  );
}
