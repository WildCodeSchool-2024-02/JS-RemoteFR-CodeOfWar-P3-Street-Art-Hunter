import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/images/simpleLogo.svg";

export default function NavBarDesktop() {
  const [isActive, setIsActive] = useState("Acceuil");

  const pathArray = [
    { path: "/", name: "Accueil" },
    { path: "/gallery", name: "Galerie" },
    { path: "/profile/:id", name: "Profil" },
    { path: "/help", name: "Aide" },
    { path: "/connection", name: "Connexion" },
  ];
  return (
    <section className="navDesktopContainer">
      <img src={logo} alt="Logo" className="logoNavDesktop" />
      <div className="navDesktopNavigation">
        {pathArray.map((path) => (
          <Link
            key={path.name}
            to={path.path}
            className={
              isActive === path.name
                ? "linkNavDesktop linkNavActive"
                : "linkNavDesktop"
            }
            onClick={() => setIsActive(path.name)}
          >
            <p>{path.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
