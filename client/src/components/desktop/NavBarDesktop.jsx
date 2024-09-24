import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import logo from "../../assets/images/simpleLogo.svg";
import { UserInfoContext } from "../../services/context/UserInfoContext";

export default function NavBarDesktop() {
  const { userInfo } = useContext(UserInfoContext);

  const [isActive, setIsActive] = useState("Acceuil");

  const pathArray = [
    { path: "/", name: "Accueil" },
    { path: "/gallery", name: "Galerie" },
    ...(userInfo ? [{ path: `/profile/${userInfo.id}`, name: "Profil" }] : []),
    { path: "/help", name: "Aide" },
    ...(!userInfo ? [{ path: "/connection", name: "Connexion" }] : []),
    ...(userInfo?.isAdmin ? [{ path: "/admin", name: "Gestion" }] : []),
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
