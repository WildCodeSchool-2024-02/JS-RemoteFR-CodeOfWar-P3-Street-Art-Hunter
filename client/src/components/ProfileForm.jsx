import { useState } from "react";
import PropTypes from "prop-types";
import { updateUser } from "../services/request";
import fields from "../services/dataProfile";
import Pen from "../assets/images/profil_pen.svg";
import Check from "../assets/images/check.svg";

export default function ProfileForm({ userDetail }) {
  const [editField, setEditField] = useState(null);
  const { lastname, firstname, pseudo, mail, password, avatar, id } =
    userDetail;
  const [formData, setFormData] = useState({
    lastname,
    firstname,
    pseudo,
    mail,
    password,
    avatar,
    id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = (field) => {
    setEditField(field);
  };

  const handleSave = async (field) => {
    const userData = {
      ...formData,
      [field]: formData[field],
    };
    const response = await updateUser(formData.id, userData);
    console.info("profil modifié", response);
    setEditField(null);
  };

  return (
    <div>
      <section>
        <div className="profilFormField">
          {fields.map((field) => (
            <div key={field.name} className="profileField">
              <label htmlFor={field.name}>{field.label}</label>
              {editField === field.name ? (
                <div className="valid">
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.label}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleSave(field.name)}
                  >
                    <img src={Check} alt="valider" />
                  </button>
                </div>
              ) : (
                <div className="edit">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleEdit(field.name)}
                  >
                    <img src={Pen} alt="crayon pour modifier" />
                  </button>
                  <p>{formData[field.name]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
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
    id: PropTypes.number,
  }).isRequired,
};
