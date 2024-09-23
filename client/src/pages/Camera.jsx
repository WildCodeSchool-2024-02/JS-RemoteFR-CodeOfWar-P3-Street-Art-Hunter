import { useLoaderData } from "react-router-dom";
import { useContext, useState, useRef } from "react";

import { sendArtwork } from "../services/request";

import { GeoLocationContext } from "../services/context/GeoLocationContext";

import GradientButton from "../components/GradientButton";
import { datePicture } from "../utils/function";

import takePicture from "../assets/images/camera_take_picture.svg";

import "../styles/styleGradientButton.css";
import "../styles/camera.css";

export default function Camera() {
  const userLocation = useContext(GeoLocationContext);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [imageDataUrl, setImageDataUrl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (error) {
      console.error("Erreur lors de l'accès à la caméra :", error);
    }
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL("image/jpeg");
      setImageDataUrl(imageData);
    }
  };

  const [artworkProperties, setArtworkProperties] = useState({
    title: "",
    description: "",
    image_url: `${setImageDataUrl}`,
    lat: `${userLocation.latitude}`,
    lon: `${userLocation.longitude}`,
    author: "",
    style_id: "",
    city_id: 1,
    user_id: "",
  });

  const handleChangeProperties = (event) => {
    const { name, value } = event.target;
    setArtworkProperties((previousAdd) => ({
      ...previousAdd,
      [name]: value,
    }));
  };

  const handleClickOpen = async () => {
    setIsOpen(true);
    await startCamera();
  };

  const handleClikClose = async () => {
    setIsOpen(false);
    await capturePhoto();
  };

  const data = useLoaderData();

  return (
    <section>
      <form action="" method="post" className="form_camera">
        <div className="form_container_picture">
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
        </div>
        <h1>Post</h1>
        <label htmlFor="picture_date">Date</label>
        <input type="text" value={datePicture} readOnly />
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

        <label htmlFor="picture_location">Lieu*</label>
        <input
          type="text"
          value={artworkProperties.lat}
          onChange={handleChangeProperties}
        />
        <label htmlFor="picture_description">Description</label>
        <textarea
          rows="5"
          name="description"
          value={artworkProperties.description}
          onChange={handleChangeProperties}
        />

        <GradientButton
          text="Ajouter une œuvre"
          type="submit"
          onClick={() => sendArtwork(artworkProperties)}
        />
      </form>
    </section>
  );
}
