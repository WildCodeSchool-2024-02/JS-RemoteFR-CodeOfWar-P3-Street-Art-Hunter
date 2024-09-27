import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { useContext } from "react";

import { UserInfoContext } from "../services/context/UserInfoContext";
import useScreenWidth from "../utils/hook/useScreenWidth";

import Help from "../assets/images/nav_help.svg";
import Gallery from "../assets/images/nav_gallery.svg";
import Map from "../assets/images/locationAnim.json";
import Camera from "../assets/images/nav_camera.svg";
import Profil from "../assets/images/nav_profil.svg";

import NavBarDesktop from "./desktop/NavBarDesktop";

import "../styles/navBar.css";

export default function NavBar() {
  const { userInfo } = useContext(UserInfoContext);
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
        {userInfo ? (
          <Link to={`/profile/${userInfo.id}`}>
            <img src={Profil} alt="Profile" />
            <span className="nav_description">Profil</span>
          </Link>
        ) : (
          <Link to="/connection">
            <div className="profilLogin">
              <div> </div>
            </div>
            <p className="nav_description">Login</p>
          </Link>
        )}
      </div>
    </nav>
  );
}
