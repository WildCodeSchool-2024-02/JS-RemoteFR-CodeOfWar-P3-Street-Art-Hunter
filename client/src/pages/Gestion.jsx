import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import { Validation, Hunters, Artworks } from "../components/AdminSettings";

import "../styles/gestion.css";

export default function Gestion() {
  const { readArtwork, readUsers, readAllArtworks } = useLoaderData();
  const artworks = readArtwork;
  const users = readUsers;
  const allArtworks = readAllArtworks;

  const [isActive, setIsActive] = useState("Validation");

  const headers = [
    { name: "Validation" },
    { name: "Hunters" },
    { name: "Artworks" },
    { name: "" },
  ];

  const adminSettings = { Validation, Hunters, Artworks };

  const Admin = adminSettings[isActive];

  const handleClickActive = (header) => {
    if (header.name.length > 0) {
      setIsActive(header.name);
    }
  };

  return (
    <section className="gestion">
      <h1>Gestion</h1>
      <div className="gestionHeader">
        <div className="gestionContainer">
          {headers.map((header) => (
            <button
              key={header.name}
              type="button"
              className={
                header.name === isActive ? "headers active" : "headers"
              }
              onClick={() => handleClickActive(header)}
            >
              <p>{header.name}</p>
            </button>
          ))}
        </div>
      </div>
      <section className="gestionBody">
        <Admin artworks={artworks} users={users} allArtworks={allArtworks} />
      </section>
    </section>
  );
}
