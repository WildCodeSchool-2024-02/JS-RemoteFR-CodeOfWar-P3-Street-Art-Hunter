import myAxios from "./instanceAxios";

// ##### *** GET *** ##### \\
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

// *** USERS *** \\
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

// *** ARTWORKS *** \\
export function getArtworks() {
  return myAxios
    .get("/artworks")
    .then((response) => response.data)
    .catch((error) => console.info(error));
}
export function getGallery(id) {
  return myAxios
    .get(`/artworks/${id}`)
    .then((response) => response.data)
    .catch((error) => console.info(error));
}

// *** STYLES *** \\
export function getStyle() {
  return myAxios
    .get("/styles")
    .then((response) => response.data)
    .catch((error) => console.info(error));
}

// *** FAVORITES *** \\
export function getFavorites(id, setter) {
  return myAxios
    .get(`/favorites/${id}`)
    .then((response) => setter(response.data))
    .catch((error) => console.error(error));
}

// ##### *** POST *** ###### \\
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

// *** USERS *** \\
// *** ARTWORKS *** \\
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

// *** FAVORITES *** \\
export function postFavorites(artworkId) {
  myAxios
    .post(`/favorites`, { artwork_id: artworkId }, { withCredentials: true })
    .then((response) => console.info(response))
    .catch((error) => console.error(error));
}

// ##### *** PUT *** ##### \\
export function updateScore(id, score) {
  myAxios
    .put(`/score/${id}`, { score })
    .then((response) => console.info(response))
    .catch((error) => console.info(error));
}

// *** USERS *** \\
export function updateUser(id, userData) {
  const formData = new FormData();
  Object.keys(userData).forEach((key) => {
    formData.append(key, userData[key]);
  });
  return myAxios
    .put(`/users/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data)
    .catch((error) => console.info(error));
}
// *** ARTWORKS *** \\
// *** STYLES *** \\
// *** FAVORITES *** \\

// ###### *** DELETE *** ###### \\
export function deleteCookie() {
  return myAxios
    .get("/logout", { withCredentials: true })
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
}

// *** USERS *** \\
export function deleteUser(id) {
  myAxios
    .delete(`users/${id}`)
    .then((response) => {
      console.info(response.data);
    })
    .catch((error) => console.error(error));
}

// *** ARTWORKS *** \\
