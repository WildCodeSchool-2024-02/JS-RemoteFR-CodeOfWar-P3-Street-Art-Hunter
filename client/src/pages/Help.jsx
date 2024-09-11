import { useState } from "react";

import { Règles, Licence, Contact } from "../components/Helpers";

import "../styles/styleHelp.css";

export default function Help() {
  const [isActive, setIsActive] = useState("Règles");

  const helpers = [
    { name: "Règles" },
    { name: "Licence" },
    { name: "Contact" },
    { name: "" },
  ];
  const helpComponents = { Règles, Licence, Contact };
  const Component = helpComponents[isActive];

  const handleClickActive = (help) => {
    if (help.name.length > 0) {
      setIsActive(help.name);
    }
  };

  return (
    <section className="helpContainer">
      <div className="helpHeader">
        <h1 className="helpTitle">Helper</h1>
        <div className="helpersContainer">
          {helpers.map((help) => (
            <button
              key={help.name}
              type="button"
              className={help.name === isActive ? "helpers active" : " helpers"}
              onClick={() => handleClickActive(help)}
            >
              <p>{help.name}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="helpMain">
        <Component />
      </div>
    </section>
  );
}
