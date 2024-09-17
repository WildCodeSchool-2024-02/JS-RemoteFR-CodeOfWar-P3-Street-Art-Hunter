import { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import myAxios from "../services/instanceAxios";
import GradientButton from "../components/GradientButton";
import "../styles/connection.css";

import logo from "../assets/images/logo_streetArt.svg";

export default function Connection() {
  // const userLogin = useLoaderData();
  // console.info("userlogin", userLogin);

  const [auth, setAuth] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    myAxios
      .post(
        "/login",
        {
          mail: emailRef.current.value,
          password: passwordRef.current.value,
        },
        { withCredentials: true }
      )
      .then((response) => {
        setAuth(response);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="connection">
      <div className="connection_form">
        <img src={logo} alt="Logo" />
        <h2>
          DEVENEZ CHASSEUR <br />
          <span className="headConnexion">D'OEUVRE D'ART</span>
        </h2>
        {auth == null ? (
          <form onSubmit={handleSubmit}>
            <input
              name="mail"
              ref={emailRef}
              type="email"
              id="mail"
              placeholder="Adresse mail"
            />
            <input
              name="password"
              type="password"
              id="password"
              ref={passwordRef}
              placeholder="Mot de passe"
            />
            <GradientButton
              text="Se connecter"
              type="submit"
              onClick={handleSubmit}
            />
          </form>
        ) : (
          <GradientButton
            text="Se déconnecter"
            type="button"
            onClick={() => {
              setAuth(null);
            }}
          />
        )}
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
