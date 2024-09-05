import { useState } from "react";
import PropTypes from "prop-types";
import fields from "../services/utils";
import { updateUser } from "../services/request";
import Pen from "../assets/images/profil_pen.svg";

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
        <h2>Profil</h2>
        <div className="profilFormField">
          {fields.map((field) => (
            <div key={field.name} className="profileField">
              <label htmlFor={field.name}>{field.label}</label>
              {editField === field.name ? (
                <div>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.label}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                  <button type="button" onClick={() => handleSave(field.name)}>
                    Enregistrer
                  </button>
                </div>
              ) : (
                <div>
                  <p>{formData[field.name]}</p>
                  <button type="button" onClick={() => handleEdit(field.name)}>
                    <img src={Pen} alt="crayon pour modifier" />
                  </button>
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
