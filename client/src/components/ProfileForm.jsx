import { useState } from "react";
import PropTypes from "prop-types";
import { updateUser } from "../services/request";

import "../styles/profile.css";
import Pen from "../assets/images/profil_pen.svg";
import Valid from "../assets/images/profil_valid.svg";

export default function ProfileForm({ userDetail }) {
  const [editField, setEditField] = useState(null);
  const [formData, setFormData] = useState({
    lastname: userDetail.lastname,
    firstname: userDetail.firstname,
    pseudo: userDetail.pseudo,
    mail: userDetail.mail,
    password: userDetail.password,
    avatar: userDetail.avatar,
    id: userDetail.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = (field) => {
    setEditField(field);
  };

  const handleSave = async () => {
    const userData = {
      lastname: formData.lastname,
      firstname: formData.firstname,
      pseudo: formData.pseudo,
      mail: formData.mail,
      password: formData.password,
      avatar: formData.avatar,
      id: formData.id,
    };
    await updateUser(userDetail.id, userData);
    setEditField(null);
  };

  return (
    <section>
      <div className="profileField">
        <label htmlFor="lastname">Nom</label>
        {editField === "lastname" ? (
          <div className="valid">
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
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
            <p>{formData.lastname}</p>
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
              value={formData.firstname}
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
            <p>{formData.firstname}</p>
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
              value={formData.pseudo}
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
            <p>{formData.pseudo}</p>
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
              value={formData.mail}
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
            <p>{formData.mail}</p>
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
              value={formData.password}
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
            <p>{formData.password}</p>
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
              value={formData.avatar}
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
            <p>{formData.avatar}</p>
          </div>
        )}
      </div>
    </section>
  );
}

ProfileForm.propTypes = {
  userDetail: PropTypes.shape({
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
