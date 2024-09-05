import { useLoaderData } from "react-router-dom";

export default function GalleryDetails() {
  const artwork = useLoaderData();
  console.info(artwork);

  return <h1>Gallery Details</h1>;
}
