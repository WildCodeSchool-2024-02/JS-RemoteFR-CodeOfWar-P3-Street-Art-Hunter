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
              onClick={help.name.length > 0 && (() => setIsActive(help.name))}
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
