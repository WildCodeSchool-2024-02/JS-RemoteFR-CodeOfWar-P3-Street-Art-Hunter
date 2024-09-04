import { Link } from "react-router-dom";

import Help from "../assets/images/nav_help.svg";
import Gallery from "../assets/images/nav_gallery.svg";
import Map from "../assets/images/nav_map.svg";
import Camera from "../assets/images/nav_camera.svg";
import Profil from "../assets/images/nav_profil.svg";

import "../styles/navBar.css";

export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="nav_picto">
        <Link to="/help">
          <img src={Help} alt="Help" />
          <span className="nav_description">Help</span>
        </Link>
      </div>
      <div className="nav_picto">
        <Link to="/gallery">
          <img src={Gallery} alt="Gallery" />
          <span className="nav_description">Gallery</span>
        </Link>
      </div>
      <div className="nav_picto_large">
        <Link to="/">
          <img src={Map} alt="Map" />
        </Link>
      </div>
      <div className="nav_picto">
        <Link to="/camera">
          <img src={Camera} alt="Camera" />
          <span className="nav_description">Camera</span>
        </Link>
      </div>
      <div className="nav_picto">
        <Link to="/profile">
          <img src={Profil} alt="Profile" />
          <span className="nav_description">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
