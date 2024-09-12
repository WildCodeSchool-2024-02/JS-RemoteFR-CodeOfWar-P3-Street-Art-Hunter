import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import RankingList from "../components/RankingList";

import "../styles/styleRanking.css";

export default function Ranking() {
  const { userInfo, rankings } = useLoaderData();

  const [searchPseudo, setSearchPseudo] = useState("");

  const userRank = rankings.findIndex(
    (ranking) => ranking.pseudo === userInfo.pseudo
  );

  return (
    <section className="rankingContainer">
      <div className="rankingHeader">
        <h2 className="rankingTitle">Classement</h2>
        <div className="userInfoContainer">
          <div className="userPicturePseudo">
            <div className="userPicture">
              <img src={userInfo.avatar} alt="avatar" className="userAvatar" />
            </div>
            <p className="userPseudo">@{userInfo.pseudo}</p>
          </div>
          <div className="userScore">
            <div className="userRank">
              <p>Points</p>
              <p>{userInfo.score}</p>
            </div>
            <div className="userRank">
              <p>Rang</p>
              <p>n°{userRank + 1}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="usersRankingContainer">
        <input
          type="text"
          className="rankInput"
          placeholder="Sasir un pseudo"
          onChange={(event) => setSearchPseudo(event.target.value)}
        />
        <RankingList rankings={rankings} searchPseudo={searchPseudo} />
      </div>
    </section>
  );
}
