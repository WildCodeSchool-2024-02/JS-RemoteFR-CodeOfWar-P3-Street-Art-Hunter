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
    .then((response) => response.data)
    .catch((error) => console.info(error));
}


export function getCamera() {
  return myAxios
    .get("/styles")
    .then((response) => response.data)
    .catch((error) => console.info(error));
}

export function sendArtwork(artworkProperties) {
  console.info("test:", artworkProperties);
  return myAxios
    .post("/artworks", artworkProperties)
    .then((response) => console.info(response))
    .catch((error) => console.info(error));
}

export function updateUser(id, userData) {
  return myAxios
    .put(`/users/${id}`, userData)
    .then((response) => response.data)
    .catch((error) => console.info(error));
}

