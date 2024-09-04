import Map from "../components/Map";

import "leaflet/dist/leaflet.css";
import "../styles/map.css";

export default function Home() {

  return (
    <section className="homePage_Map">
      <Map />
    </section>
  );
}
