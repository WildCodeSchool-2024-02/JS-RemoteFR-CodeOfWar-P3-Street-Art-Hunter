import { useState } from "react";
import { Validation, Contact } from "../components/AdminSettings";
import "../styles/gestion.css";

export default function Gestion() {
  const [isActive, setIsActive] = useState("Validation");

  const headers = [{ name: "Validation" }, { name: "Contact" }, { name: "" }];

  const adminSettings = { Validation, Contact };
  const Admin = adminSettings[isActive];

  const handleClickActive = (header) => {
    if (header.name.length > 0) {
      setIsActive(header.name);
    }
  };

  return (
    <section className="gestion">
      <div className="gestionHeader">
        {headers.map((header) => (
          <button
            key={header.name}
            type="button"
            className={header.name === isActive ? "headers active" : "headers"}
            onClick={() => handleClickActive(header)}
          >
            <p>{header.name}</p>
          </button>
        ))}
      </div>
      <section className="gestionBody">
        <Admin />
      </section>
    </section>
  );
}
