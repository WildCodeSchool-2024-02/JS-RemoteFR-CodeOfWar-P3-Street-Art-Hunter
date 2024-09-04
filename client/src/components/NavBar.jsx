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
        <img src={Help} alt="Help" />
        <span className="nav_description">Help</span>
      </div>
      <div className="nav_picto">
        <img src={Gallery} alt="Gallery" />
        <span className="nav_description">Gallery</span>
      </div>
      <div className="nav_picto_large">
        <img src={Map} alt="Map" />
      </div>
      <div className="nav_picto">
        <img src={Camera} alt="Camera" />
        <span className="nav_description">Camera</span>
      </div>
      <div className="nav_picto">
        <img src={Profil} alt="Profil" />
        <span className="nav_description">Profil</span>
      </div>
    </nav>
  );
}
