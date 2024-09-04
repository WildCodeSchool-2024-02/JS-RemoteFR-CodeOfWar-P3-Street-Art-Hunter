import myAxios from "./instanceAxios";

export default function getMap() {
  return myAxios
    .get("/artworks")
    .then((response) => response.data)
    .catch((error) => console.info(error));
}
