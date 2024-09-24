import myAxios from "./instanceAxios";

export function getMap() {
  return myAxios
    .get("/artworks")
    .then((response) => response.data)
    .catch((error) => console.info(error));
}

export function getUserbyId(id) {
  return myAxios
    .get(`/users/${id}`)
    .then((response) => response.data.result)
    .catch((error) => console.info(error));
}

export function getCamera() {
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

export function sendArtwork(artworkProperties) {
  return myAxios
    .post("/artworks", artworkProperties, { withCredentials: true })
    .then((response) => console.info(response))
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

export function getUsersRanking() {
  return myAxios
    .get("/users/ranking")
    .then((response) => response.data.result)
    .catch((error) => console.info(error));
}

export function getValidated() {
  return myAxios
    .get(`/artworks/validate`)
    .then((response) => response.data)
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
