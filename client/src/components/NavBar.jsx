import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { useContext, useState } from "react";

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
  const [navSelect, SetNavSelect] = useState("");

  return screenWidth > 480 ? (
    <NavBarDesktop />
  ) : (
    <nav className="navBar">
      <div className="nav_picto">
        <Link to="/help" onClick={() => SetNavSelect("help")}>
          <img
            src={Help}
            alt="Help"
            className={navSelect === "help" && "imgAsSelect"}
          />
          <span
            className={
              navSelect === "help"
                ? "nav_description redSelect"
                : "nav_description"
            }
          >
            Aide
          </span>
        </Link>
      </div>
      <div className="nav_picto">
        <Link to="/gallery" onClick={() => SetNavSelect("gallery")}>
          <img
            src={Gallery}
            alt="Gallery"
            className={navSelect === "gallery" && "imgAsSelect"}
          />
          <span
            className={
              navSelect === "gallery"
                ? "nav_description redSelect"
                : "nav_description"
            }
          >
            Galerie
          </span>
        </Link>
      </div>
      <div className="nav_picto_large">
        <Link to="/" onClick={() => SetNavSelect("")}>
          <Lottie animationData={Map} loop className="lottie" />
        </Link>
      </div>
      <div className="nav_picto">
        <Link
          to={userInfo ? "/camera" : ""}
          onClick={() => SetNavSelect("camera")}
        >
          <img
            src={Camera}
            alt="Camera"
            className={navSelect === "camera" && "imgAsSelect"}
          />
          <span
            className={
              navSelect === "camera"
                ? "nav_description redSelect"
                : "nav_description"
            }
          >
            Photo
          </span>
        </Link>
      </div>
      <div className="nav_picto">
        {userInfo ? (
          <Link
            to={`/profile/${userInfo.id}`}
            onClick={() => SetNavSelect("profile")}
          >
            <img
              src={Profil}
              alt="Profile"
              className={navSelect === "profile" && "imgAsSelect"}
            />
            <span
              className={
                navSelect === "profile"
                  ? "nav_description redSelect"
                  : "nav_description"
              }
            >
              Profil
            </span>
          </Link>
        ) : (
          <Link to="/connection" onClick={() => SetNavSelect("login")}>
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
