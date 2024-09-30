import { useNavigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";

import CameraForm from "../components/CameraForm";
import { GeoLocationContext } from "../services/context/GeoLocationContext";
import { UserInfoContext } from "../services/context/UserInfoContext";
import { postArtwork } from "../services/request";
import { takePhoto, getVideo } from "../utils/cameraTools";
import takePicture from "../assets/images/camera_take_picture.svg";

import "../styles/camera.css";

export default function Camera() {
  const userLocation = useContext(GeoLocationContext);
  const { userInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const [uploadStatus, setUploadStatus] = useState(false);

  const [photoBlob, setPhotoBlob] = useState(null);
  const [artworkProperties, setArtworkProperties] = useState({
    title: "",
    description: "",
    lat: `${userLocation && userLocation.latitude}`,
    lon: `${userLocation && userLocation.longitude}`,
    author: "",
    style_id: "",
    user_id: `${userInfo.id}`,
  });

  const handleChangeProperties = (event) => {
    const { name, value } = event.target;
    setArtworkProperties((previousAdd) => ({
      ...previousAdd,
      [name]: value,
    }));
  };

  const uploadPhoto = (event) => {
    const formData = new FormData();

    formData.append("image_url", photoBlob);
    formData.append("title", artworkProperties.title);
    formData.append("author", artworkProperties.author);
    formData.append("description", artworkProperties.description);
    formData.append("style_id", artworkProperties.style_id);
    formData.append("user_id", artworkProperties.user_id);
    formData.append("lat", artworkProperties.lat);
    formData.append("lon", artworkProperties.lon);

    event.preventDefault();

    postArtwork(formData);
    setUploadStatus(true);

    setTimeout(() => {
      setUploadStatus(false);
      navigate("/");
    }, 2000);
  };

  return (
    <section className="bigcontainer">
      <form onSubmit={uploadPhoto} className="form_camera">
        <div className="form_container_picture">
          <div className="form_file_upload">
            {photoBlob && (
              <div className="container_picture_captured">
                <img
                  src={URL.createObjectURL(photoBlob)}
                  alt="Captured"
                  className="picture_Captured"
                />
              </div>
            )}
            <label htmlFor="form_file_input" className="form_custom_file_label">
              <button
                type="button"
                onClick={() => getVideo(setIsOpen, videoRef)}
                className="start_camera"
              >
                📸
              </button>
            </label>
            <div className="dialog_camera">
              {isOpen && (
                <dialog open>
                  <video ref={videoRef} autoPlay playsInline id="video">
                    <track default kind="captions" srcLang="fr" />
                  </video>
                  <button
                    type="button"
                    onClick={() =>
                      takePhoto(setPhotoBlob, setIsOpen, videoRef, photoRef)
                    }
                    className="take_a_picture"
                  >
                    <img src={takePicture} alt="round click circle" />
                  </button>

                  <canvas ref={photoRef} style={{ display: "none" }} />
                </dialog>
              )}
            </div>
          </div>
        </div>
        <h1 id="cameraTitle">Post</h1>
        <div className="inputContainerCamera">
          <CameraForm
            artworkProperties={artworkProperties}
            handleChangeProperties={handleChangeProperties}
            uploadPhoto={uploadPhoto}
          />
        </div>
      </form>
      {uploadStatus && <p className="cameraPopup">Artwork ajouté!</p>}
    </section>
  );
}
