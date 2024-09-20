import { useEffect, useState } from "react";
import myAxios from "../services/instanceAxios";

function Validation() {
  const [validated, setValidated] = useState([]);
  const getValidated = () => {
    myAxios
      .get("/artworks/validate")
      .then((response) => setValidated(response.data))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getValidated();
  }, []);

  console.info(validated);
  return (
    <>
      <h1>coucou depuis la validation</h1>

      {validated.map((validate) => (
        <div key={validate.id}>
          <p> {validate.description}</p>
        </div>
      ))}
    </>
  );
}
function Contact() {
  return <h1>Coucou de contact</h1>;
}
export { Validation, Contact };
