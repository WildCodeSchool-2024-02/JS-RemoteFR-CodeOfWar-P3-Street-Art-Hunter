// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import PropTypes from "prop-types";

export default function Profile() {
  const user = useLoaderData();
  // const [editUser, setEditUser] = useState(user);

  // const editField = (e) => {
  //   setEditUser({ ...editUser, [e.target.id]: e.target.value });
  // };
  return (
    <div>
      <section>
        <h2>Profil</h2>
        <img src={user.avatar} alt={user.pseudo} />
        <h2>{user.pseudo}</h2>
      </section>
      <section>
        <div>
          <div>
            <h6>Adresse email</h6>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsUlEQVR4nO3VPQoCMRBA4XcYsbPbwloQC1tLL7GVpVOt3ssj2OsJFCvbyEICIfizRWbCYh6kCuRjEtiF2shrgTtwBhorVAAXrQcwt0ZjvCkBO3/tlMBvGpAMwNvcaDj4mOztor29FhrWu8lFG/00uQnqtHAZgJq8qatoruRvrnfl/6e/0Kwfh9C2BNq3LIH2TS3RWXLwBFgAG+CpOenhy1RrFLtavWPaCbgAnb/22vh7AQEMocoBCJ3cAAAAAElFTkSuQmCC"
              alt="crayon pour modifier"
            />
          </div>
          <p>{user.email}</p>
        </div>
        <div>
          <h6>Mot de passe</h6>
          <p>{user.password}</p>
        </div>
        <div>
          <h6>Ville</h6>
          <p>{user.city}</p>
        </div>
        <div>
          <h6>Pseudo</h6>
          <p>{user.pseudo}</p>
        </div>
        <div>
          <h6>Avatar</h6>
          <p>upload</p>
        </div>
      </section>
    </div>
  );
}
