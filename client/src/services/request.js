import myAxios from "./instanceAxios";

export function getMap() {
  return myAxios
    .get("/artworks")
    .then((response) => response.data)
    .catch((error) => console.info(error));
}
export function getUser() {
  return myAxios
    .get("/users")
    .then((response) => response.data.result)
    .catch((error) => console.error(error));
}
export function getUserbyId(id) {
  return myAxios
    .get(`/users/${id}`)
    .then((response) => response.data.result)
    .catch((error) => console.info(error));
}

export function getStyle() {
  return myAxios
    .get("/styles")
    .then((response) => response.data)
    .catch((error) => console.info(error));
}
export function getGallery(id) {
  return myAxios
    .get(`/artworks/${id}`)
    .then((response) => response.data)
    .catch((error) => console.info(error));
}

export function updateUser(id, userData) {
  const formData = new FormData();
  console.info("updateUser-userData", userData);
  Object.keys(userData).forEach((key) => {
    formData.append(key, userData[key]);
  });
  console.info("updateUser-Object", Object.keys(userData));
  return myAxios
    .put(`/users/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data)
    .catch((error) => console.info(error));
}

export function updateScore(id, score) {
  myAxios
    .put(`/score/${id}`, { score })
    .then((response) => console.info(response))
    .catch((error) => console.info(error));
}

export function getUsersRanking() {
  return myAxios
    .get("/users/ranking")
    .then((response) => response.data.result)
    .catch((error) => console.info(error));
}

export function postArtwork(formData) {
  myAxios
    .post("/artworks", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        withCredentials: true,
      },
    })
    .then((response) => {
      console.info(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getValidated() {
  return myAxios
    .get(`/artworks/validate`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

export function getCityName(lat, lon, setter) {
  const location = {
    lat,
    lon,
  };
  myAxios
    .post("/findCity", location)
    .then((response) => setter(response.data))
    .catch((error) => console.error(error));
}

export function getUserConnected(setter) {
  return myAxios
    .get("/checkLogin", { withCredentials: true })
    .then((response) => setter(response.data))
    .catch((error) => console.error(error.message));
}

export function deleteCookie() {
  return myAxios
    .get("/logout", { withCredentials: true })
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
}

export function deleteUser(id) {
  myAxios
    .delete(`users/${id}`)
    .then((response) => {
      console.info(response.data);
    })
    .catch((error) => console.error(error));
}
export function deleteArtwork(id) {
  myAxios
    .delete(`artworks/${id}`)
    .then((response) => {
      console.info(response.data);
    })
    .catch((error) => console.error(error));
}

export function updateArtwork(id) {
  myAxios
    .put(`artworks/${id}`)
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
}
// const sendCredentialsForUpdate = (event) => {
//   event.preventDefault();
//   myAxios
//     .put(`/artworks/${artwork.id}`, modified, { withCredentials: true })
//     .then((response) => {
//       console.info(response.data);
//       window.alert("L'artwork a bien été modifié!!");
//       navigate("/gestion");
//     })
//     .catch((error) => console.error(error));
// };
