import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";

import { GeoLocationContext } from "../services/context/GeoLocationContext";

import GradientButton from "../components/GradientButton";

import myAxios from "../services/instanceAxios";

// import takePicture from "../assets/images/camera_take_picture.svg";

import "../styles/styleGradientButton.css";
import "../styles/camera.css";

export default function Camera() {
  const userLocation = useContext(GeoLocationContext);
  const data = useLoaderData();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const [uploadStatus, setUploadStatus] = useState(false);

  const [photoBlob, setPhotoBlob] = useState(null);
  const [artworkProperties, setArtworkProperties] = useState({
    title: "",
    description: "",
    lat: `${userLocation && userLocation.latitude}`,
    lon: `${userLocation && userLocation.longitude}`,
    author: "",
    style_id: "",
    user_id: 1,
  });

  const handleChangeProperties = (event) => {
    const { name, value } = event.target;
    setArtworkProperties((previousAdd) => ({
      ...previousAdd,
      [name]: value,
    }));
  };

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePhoto = () => {
    const width = 400;
    const height = 300;

    const video = videoRef.current;
    const photo = photoRef.current;

    if (!video || !photo) {
      console.error("Ne peut pas être false");
    }

    photo.width = width;
    photo.height = height;

    const ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);

    photo.toBlob((blob) => {
      setPhotoBlob(blob);
      setHasPhoto(true);
    }, "image/png");
  };

  const sendArt = (formData) => {
    console.info("coucou de send art");
    myAxios
      .post("/artworks", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          withCredentials: true,
        },
      })
      .then((response) => {
        navigate("/");
        console.info(response);
      })
      .catch((error) => {
        console.info("Du front mais catcg");

        console.error(error);
      });
  };

  const uploadPhoto = () => {
    console.info("1");
    const formData = new FormData();
    console.info("2");

    formData.append("image_url", photoBlob);
    console.info("3");

    formData.append("title", artworkProperties.title);
    console.info("4");

    formData.append("author", artworkProperties.author);
    console.info("5");

    formData.append("description", artworkProperties.description);
    console.info("6");

    formData.append("style_id", artworkProperties.style_id);
    console.info("7");

    formData.append("user_id", artworkProperties.user_id);
    console.info("8");

    formData.append("lat", artworkProperties.lat);
    console.info("9");

    formData.append("lon", artworkProperties.lon);
    console.info("10");

    sendArt(formData);

    setUploadStatus(true);
    console.info("last");

    // setTimeout(() => {
    //   console.info("ultime last");
    //   setUploadStatus(false);
    //   navigate("/");
    // }, 2000);
  };

  return (
    <section className="bigcontainer">
      <form onSubmit={uploadPhoto} className="form_camera">
        {/* <div className="form_container_picture">
          <div className="form_file_upload">
            {imageDataUrl && (
              <div className="container_picture_captured">
                <img
                  src={imageDataUrl}
                  alt="Captured"
                  className="picture_Captured"
                />
              </div>
            )}
            <label htmlFor="form_file_input" className="form_custom_file_label">
              <button
                type="button"
                onClick={handleClickOpen}
                className="start_camera"
              >
                + Ajouter une photo
              </button>
            </label>
            <div className="dialog_camera">
              {isOpen && (
                <dialog open>
                  <video ref={videoRef} autoPlay playsInline id="video">
                    <track default kind="captions" srcLang="fr" />
                  </video>
                  {isCameraActive === false ? null : (
                    <button
                      type="button"
                      onClick={handleClikClose}
                      className="take_a_picture"
                    >
                      <img src={takePicture} alt="round click circle" />
                    </button>
                  )}
                  <canvas ref={canvasRef} style={{ display: "none" }} />
                </dialog>
              )}
            </div>
          </div>
        </div> */}
        <div>
          <button type="button" onClick={getVideo}>
            Activer la Caméra
          </button>
          <div>
            <video ref={videoRef}>
              <track default kind="captions" srcLang="fr" />
            </video>
            <button type="button" onClick={takePhoto}>
              Prendre une Photo
            </button>
          </div>
          <canvas ref={photoRef} style={{ display: "none" }} />
          {hasPhoto && (
            <div>
              <img src={URL.createObjectURL(photoBlob)} alt="capture" />
            </div>
          )}
          {uploadStatus && <p>{uploadStatus}</p>}
        </div>
        <h1>Post</h1>
        {/* <label htmlFor="picture_date">Date</label>
        <input type="text" value={datePicture} readOnly /> */}
        <label htmlFor="picture_style">Type*</label>
        <select
          className="dropdown_Style"
          name="style_id"
          value={artworkProperties.style_id}
          onChange={handleChangeProperties}
        >
          <option value="">Selectionner un type</option>
          {data?.map((style) => (
            <option key={style.id} value={style.id}>
              {style.name}
            </option>
          ))}
        </select>
        <label htmlFor="picture_title">Titre*</label>
        <input
          type="text"
          name="title"
          value={artworkProperties.title}
          onChange={handleChangeProperties}
        />

        <label htmlFor="picture_author">Auteur</label>
        <input
          type="text"
          name="author"
          value={artworkProperties.author}
          onChange={handleChangeProperties}
        />

        <label htmlFor="picture_description">Description</label>
        <textarea
          rows="5"
          name="description"
          value={artworkProperties.description}
          onChange={handleChangeProperties}
        />

        <GradientButton text="Ajouter une œuvre" onClick={uploadPhoto} />
        <input type="submit" />
      </form>
      {uploadStatus && <p>Nouvel artwork ajouté !</p>}
    </section>
  );
}
