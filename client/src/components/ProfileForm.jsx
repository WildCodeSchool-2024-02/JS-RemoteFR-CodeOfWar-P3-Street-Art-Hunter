import { useState } from "react";
import PropTypes from "prop-types";
import { updateUser } from "../services/request";

import "../styles/profile.css";
import Pen from "../assets/images/profil_pen.svg";
import Valid from "../assets/images/profil_valid.svg";

export default function ProfileForm({ userDetail }) {
  const [editField, setEditField] = useState("");
  const [formDetail, setFormDetail] = useState(userDetail);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormDetail({ ...formDetail, avatar: files[0] });
    } else {
      setFormDetail({ ...formDetail, [name]: value });
    }
  };

  const handleEdit = (field) => {
    setEditField(field);
  };

  const handleSave = () => {
    updateUser(userDetail.id, formDetail);
    setEditField("");
  };

  return (
    <>
      <div className="profileField">
        <label htmlFor="lastname">Nom</label>
        {editField === "lastname" ? (
          <div className="valid">
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formDetail.lastname}
              onChange={handleChange}
            />
            <button
              type="button"
              className="btn"
              onClick={() => handleSave("lastname")}
            >
              <img src={Valid} alt="valider" />
            </button>
          </div>
        ) : (
          <div className="edit">
            <button
              type="button"
              className="btn"
              onClick={() => handleEdit("lastname")}
            >
              <img src={Pen} alt="modifier" />
            </button>
            <p>{formDetail.lastname}</p>
          </div>
        )}
      </div>
      <div className="profileField">
        <label htmlFor="firstname">Prénom</label>
        {editField === "firstname" ? (
          <div className="valid">
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formDetail.firstname}
              onChange={handleChange}
            />
            <button
              type="button"
              className="btn"
              onClick={() => handleSave("firstname")}
            >
              <img src={Valid} alt="valider" />
            </button>
          </div>
        ) : (
          <div className="edit">
            <button
              type="button"
              className="btn"
              onClick={() => handleEdit("firstname")}
            >
              <img src={Pen} alt="modifier" />
            </button>
            <p>{formDetail.firstname}</p>
          </div>
        )}
      </div>
      <div className="profileField">
        <label htmlFor="pseudo">Pseudo</label>
        {editField === "pseudo" ? (
          <div className="valid">
            <input
              type="text"
              id="pseudo"
              name="pseudo"
              value={formDetail.pseudo}
              onChange={handleChange}
            />
            <button
              type="button"
              className="btn"
              onClick={() => handleSave("pseudo")}
            >
              <img src={Valid} alt="valider" />
            </button>
          </div>
        ) : (
          <div className="edit">
            <button
              type="button"
              className="btn"
              onClick={() => handleEdit("pseudo")}
            >
              <img src={Pen} alt="modifier" />
            </button>
            <p>{formDetail.pseudo}</p>
          </div>
        )}
      </div>
      <div className="profileField">
        <label htmlFor="mail">Email</label>
        {editField === "mail" ? (
          <div className="valid">
            <input
              type="email"
              id="mail"
              name="mail"
              value={formDetail.mail}
              onChange={handleChange}
            />
            <button
              type="button"
              className="btn"
              onClick={() => handleSave("mail")}
            >
              <img src={Valid} alt="valider" />
            </button>
          </div>
        ) : (
          <div className="edit">
            <button
              type="button"
              className="btn"
              onClick={() => handleEdit("mail")}
            >
              <img src={Pen} alt="modifier" />
            </button>
            <p>{formDetail.mail}</p>
          </div>
        )}
      </div>
      <div className="profileField">
        <label htmlFor="password">Mot de passe</label>
        {editField === "password" ? (
          <div className="valid">
            <input
              type="password"
              id="password"
              name="password"
              value={formDetail.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="btn"
              onClick={() => handleSave("password")}
            >
              <img src={Valid} alt="valider" />
            </button>
          </div>
        ) : (
          <div className="edit">
            <button
              type="button"
              className="btn"
              onClick={() => handleEdit("password")}
            >
              <img src={Pen} alt="modifier" />
            </button>
            <p>***********</p>
          </div>
        )}
      </div>
      <div className="profileField">
        <label htmlFor="avatar">Avatar</label>
        {editField === "avatar" ? (
          <div className="valid">
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleChange}
            />
            <button
              type="button"
              className="btn"
              onClick={() => handleSave("avatar")}
            >
              <img src={Valid} alt="valider" />
            </button>
          </div>
        ) : (
          <div className="edit">
            <button
              type="button"
              className="btn"
              onClick={() => handleEdit("avatar")}
            >
              <img src={Pen} alt="modifier" />
            </button>

            <img
              src={`${import.meta.env.VITE_API_URL_PICTURE}/avatars/${formDetail.avatar}`}
              alt="Avatar"
              className="avatarEdit"
            />
          </div>
        )}
      </div>
    </>
  );
}

ProfileForm.propTypes = {
  userDetail: PropTypes.shape({
    lastname: PropTypes.string,
    firstname: PropTypes.string,
    pseudo: PropTypes.string,
    mail: PropTypes.string,
    password: PropTypes.string,
    avatar: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
