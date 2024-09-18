import { Link } from "react-router-dom";
import useScreenWidth from "../utils/hook/useScreenWidth";
import Lottie from "lottie-react";


import Help from "../assets/images/nav_help.svg";
import Gallery from "../assets/images/nav_gallery.svg";
import Map from "../assets/images/locationAnim.json";
import Camera from "../assets/images/nav_camera.svg";
import Profil from "../assets/images/nav_profil.svg";

import NavBarDesktop from "./desktop/NavBarDesktop";

import "../styles/navBar.css";

export default function NavBar() {
  const screenWidth = useScreenWidth();

  return screenWidth > 480 ? (
    <NavBarDesktop />
  ) : (
    <nav className="navBar">
      <div className="nav_picto">
        <Link to="/help">
          <img src={Help} alt="Help" />
          <span className="nav_description">Aide</span>
        </Link>
      </div>
      <div className="nav_picto">
        <Link to="/gallery">
          <img src={Gallery} alt="Gallery" />
          <span className="nav_description">Galerie</span>
        </Link>
      </div>
      <div className="nav_picto_large">
        <Link to="/">
          <Lottie animationData={Map} loop className="lottie" />
        </Link>
      </div>
      <div className="nav_picto">
        <Link to="/camera">
          <img src={Camera} alt="Camera" />
          <span className="nav_description">Photo</span>
        </Link>
      </div>
      <div className="nav_picto">
        <Link to="/profile/1">
          <img src={Profil} alt="Profile" />
          <span className="nav_description">Profil</span>
        </Link>
      </div>
    </nav>
  );
}
