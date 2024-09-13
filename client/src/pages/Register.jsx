import { Link } from "react-router-dom";
import "../styles/register.css";
import logo from "../assets/images/logo_streetArt.svg";
import GradientButton from "../components/GradientButton";

export default function Register() {
  return (
    <section className="register">
      <div className="register_form">
        <img src={logo} alt="Logo" />
        <h2 className="registerTitle">INSCRIPTION</h2>

        <input type="text" placeholder="Pseudo" />
        <input type="text" placeholder="Ville" />
        <input type="email" placeholder="Adresse mail" />
        <input type="password" placeholder="Mot de passe" />
        <input type="password" placeholder="Confirmez votre mot de passe" />

        <GradientButton text="Créer un compte" type="submit" />

        <p className="link_connection">
          Déja un compte ?{" "}
          <Link to="/connection" className="InscriptionLink">
            Connectez-vous!
          </Link>
        </p>
      </div>
    </section>
  );
}
