import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/images/simpleLogo.svg";

export default function NavBarDesktop() {
  const [isActive, setIsActive] = useState("home");

  return (
    <section className="navDesktopContainer">
      <img src={logo} alt="Logo" className="logoNavDesktop" />
      <div className="navDesktopNavigation">
        <Link
          to="/"
          className={
            isActive === "home"
              ? "linkNavDesktop linkNavActive"
              : "linkNavDesktop"
          }
          onClick={() => setIsActive("home")}
        >
          <p>Acceuil</p>
        </Link>
        <Link
          to="/gallery"
          className={
            isActive === "gallery"
              ? "linkNavDesktop linkNavActive"
              : "linkNavDesktop"
          }
          onClick={() => setIsActive("gallery")}
        >
          <p>Gallerie</p>
        </Link>
        <Link
          to="/profile/:id"
          className={
            isActive === "profile"
              ? "linkNavDesktop linkNavActive"
              : "linkNavDesktop"
          }
          onClick={() => setIsActive("profile")}
        >
          <p>Profile</p>
        </Link>
        <Link
          to="/help"
          className={
            isActive === "help"
              ? "linkNavDesktop linkNavActive"
              : "linkNavDesktop"
          }
          onClick={() => setIsActive("help")}
        >
          <p>Aide</p>
        </Link>
      </div>
    </section>
  );
}
