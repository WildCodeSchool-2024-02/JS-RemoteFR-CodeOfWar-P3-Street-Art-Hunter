import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Map from "../components/Map";
import RankingList from "../components/RankingList";
import ArtworkDetails from "../components/ArtworkDetails";

import crown from "../assets/images/couronneLogo.svg";
import "../styles/styleHome.css";
import { UserInfoContext } from "../services/context/UserInfoContext";

export default function HomeDesktop() {
  const { rankings } = useLoaderData();
  const { userInfo } = useContext(UserInfoContext);
  const [artworkDetails, setArtworkDetails] = useState();

  const [isVisibled, setIsVisibled] = useState({
    article: false,
    div: false,
    aside: false,
  });
  useEffect(() => {
    setTimeout(() => setIsVisibled({ article: true }), 500);
    setTimeout(() => setIsVisibled({ article: true, aside: true }), 1200);
    setTimeout(
      () => setIsVisibled({ article: true, aside: true, div: true }),
      1900
    );
  }, []);

  return (
    <section className="homeDesktopContainer">
      <div className="desktopBlock">
        <div className="leftContain">
          <article
            className={
              isVisibled.article
                ? "textHomeContainer show"
                : "textHomeContainer"
            }
          >
            <img src={crown} alt="couronne" className="crownHomeDesktop" />
            <h2>
              Bienvenue sur <span>STREET ART HUNTER</span>{" "}
              {userInfo && userInfo.pseudo}!
            </h2>
            <p>
              Le street art est une forme d'expression artistique qui s'épanouit
              dans les espaces publics, transformant les murs, les rues et les
              bâtiments en toiles vivantes où les artistes laissent leur
              empreinte créative.
            </p>
            <p>
              Commencez dès maintenant a découvrir les oeuvres d’arts et partez
              à la chasse avec votre téléphone mobile !
            </p>
          </article>
          <div className={isVisibled.div ? "mapDesktop show" : "mapDesktop"}>
            {artworkDetails && (
              <ArtworkDetails
                artwork={artworkDetails}
                setArtworkDetails={setArtworkDetails}
              />
            )}
            <Map setArtworkDetails={setArtworkDetails} />
          </div>
        </div>
        <aside
          className={
            isVisibled.aside ? "rankingHomeDesktop show" : "rankingHomeDesktop"
          }
        >
          <RankingList rankings={rankings} />
        </aside>
      </div>
    </section>
  );
}
