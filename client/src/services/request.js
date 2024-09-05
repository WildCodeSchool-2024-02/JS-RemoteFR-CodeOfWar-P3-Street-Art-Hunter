import myAxios from "./instanceAxios";

export function getMap() {
  return myAxios
    .get("/artworks")
    .then((response) => response.data)
    .catch((error) => console.info(error));
}

export function getCamera() {
  return myAxios
    .get("/styles")
    .then((response) => response.data)
    .catch((error) => console.info(error));
}
