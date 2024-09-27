import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import Map from "../components/Map";
import RankingList from "../components/RankingList";
import ArtworkDetails from "../components/ArtworkDetails";

import crown from "../assets/images/couronneLogo.svg";
import "../styles/styleHome.css";

export default function HomeDesktop() {
  const { rankings } = useLoaderData();
  const [artworkDetails, setArtworkDetails] = useState();

  return (
    <section className="homeDesktopContainer">
      <div className="desktopBlock">
        <div className="leftContain">
          <article className="textHomeContainer">
            <img src={crown} alt="couronne" className="crownHomeDesktop" />
            <h2>
              Bienvenue sur <span>STREET ART HUNTER</span> Jhon!
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              consequuntur cupiditate ullam reiciendis consectetur nulla culpa
              iste suscipit, modi pariatur voluptate doloribus, mollitia totam
              architecto quos autem. Eius, quis in?
            </p>
            <p>
              Commencez dès maintenant a découvrir les oeuvres d’arts et partez
              à la chasse avec votre téléphone mobile !
            </p>
          </article>
          <div className="mapDesktop">
            {artworkDetails && (
              <ArtworkDetails
                artwork={artworkDetails}
                setArtworkDetails={setArtworkDetails}
              />
            )}
            <Map setArtworkDetails={setArtworkDetails} />
          </div>
        </div>
        <aside className="rankingHomeDesktop">
          <RankingList rankings={rankings} />
        </aside>
      </div>
    </section>
  );
}
