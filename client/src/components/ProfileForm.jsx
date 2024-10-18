import { useState } from "react";
import PropTypes from "prop-types";
import { updateUser, updatePasswordUser } from "../services/request";

import "../styles/profile.css";
import Pen from "../assets/images/profil_pen.svg";
import Valid from "../assets/images/profil_valid.svg";

export default function ProfileForm({ userDetail }) {
  const [editField, setEditField] = useState("");
  const [formDetail, setFormDetail] = useState({
    lastname: userDetail.lastname,
    firstname: userDetail.firstname,
    pseudo: userDetail.pseudo,
    mail: userDetail.mail,
    avatar: userDetail.avatar,
  });
  const [passwordDetail, setPasswordDetail] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormDetail({ ...formDetail, avatar: files[0] });
    } else {
      setFormDetail({ ...formDetail, [name]: value });
    }
  };
  const handleSavePassword = () => {
    updatePasswordUser(userDetail.id, passwordDetail);
    setEditField("");
  };

  const handleEdit = (field) => {
    setEditField(field);
  };

  const handleSave = () => {
    updateUser(userDetail.id, formDetail);
    setEditField("");
    window.location.reload();
  };

  return (
    <>
      <div
        className={
          editField === "lastname" ? "profileField inpSelect" : "profileField"
        }
      >
        <label htmlFor="lastname">Nom</label>
        {editField === "lastname" ? (
          <div className="editSlect">
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
      <div
        className={
          editField === "firstname" ? "profileField inpSelect" : "profileField"
        }
      >
        <label htmlFor="firstname">Prénom</label>
        {editField === "firstname" ? (
          <div className="editSlect">
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
      <div
        className={
          editField === "pseudo" ? "profileField inpSelect" : "profileField"
        }
      >
        <label htmlFor="pseudo">Pseudo</label>
        {editField === "pseudo" ? (
          <div className="editSlect">
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
      <div
        className={
          editField === "mail" ? "profileField inpSelect" : "profileField"
        }
      >
        <label htmlFor="mail">Email</label>
        {editField === "mail" ? (
          <div className="editSlect">
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
      <div
        className={
          editField === "password" ? "profileField inpSelect" : "profileField"
        }
      >
        <label htmlFor="password">Mot de passe</label>
        {editField === "password" ? (
          <div className="editSlect">
            <input
              type="password"
              id="password"
              name="password"
              value={passwordDetail.password}
              onChange={(e) => setPasswordDetail(e.target.value)}
            />
            <button type="button" className="btn" onClick={handleSavePassword}>
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
      <div
        className={
          editField === "avatar" ? "profileField inpSelect" : "profileField"
        }
      >
        <label htmlFor="avatar">Avatar</label>
        {editField === "avatar" ? (
          <div className="editSlect">
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
            <p>Télécharger un fichier</p>
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
