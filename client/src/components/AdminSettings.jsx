import { useEffect, useState } from "react";
import myAxios from "../services/instanceAxios";
import GradientButton from "./GradientButton";

function Validation() {
  const [validated, setValidated] = useState([]);
  const [updateArtwork, setUpdateArtwork] = useState({
    title: "",
    description: "",
    isValidate: "",
    style: "",
  });
  const getValidated = (id) => {
    myAxios
      .get(`/artworks/${id}/validate`)
      .then((response) => setValidated(response.data))
      .catch((error) => console.error(error));
  };

  const sendCredentials = (id) => {
    myAxios
      .put(`/artworks/${id}`, updateArtwork, { withCredentials: true })
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getValidated();
  }, []);
  // const handleClickStatus = () => {
  //   setValidated(!validated);
  // };

  const handleChangeArtwork = (event) => {
    const { name, value } = event.target;
    setUpdateArtwork((previousAdd) => ({
      ...previousAdd,
      [name]: value,
    }));
  };
  console.info("coucou", handleChangeArtwork);
  console.info(validated);
  return (
    <section>
      {validated.length > 0 ? (
        validated.map((validate) => (
          <section className="validation" key={validate.id}>
            <div onSubmit={sendCredentials}>
              <img
                className="imageValidate"
                src={validate.image_url}
                alt={validate.title}
              />
            </div>
            <div className="informationValidate">
              <p>{validate.user} </p>
              <p>
                Titre : <br />
                {validate.title}
              </p>
              <input
                type="text"
                placeholder="Titre"
                name="pseudo"
                value={updateArtwork.title}
                onChange={handleChangeArtwork}
              />
              <p>
                Description : <br />
                {validate.description}
              </p>
              <p>
                Style : <br />
                {validate.style}
              </p>
            </div>
            <div className="register_form">
              <GradientButton
                text="Valider"
                type="submit"
                // onClick={handleClickStatus}
              />
            </div>
          </section>
        ))
      ) : (
        <p>Il n'y a pas d'oeuvre à valider pour le moment.</p>
      )}
    </section>
  );
}
function Contact() {
  return <h1>Coucou de contact</h1>;
}
export { Validation, Contact };
