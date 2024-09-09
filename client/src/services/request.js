import myAxios from "./instanceAxios";

export default function getMap() {
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

export function updateUser(id, userData) {
  return myAxios
    .put(`/users/${id}`, userData)
    .then((response) => response.data)
    .catch((error) => console.info(error));
}
