import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import myAxios from "../services/instanceAxios";

import RankingList from "../components/RankingList";

import "../styles/styleRanking.css";

export default function Ranking() {
  const { userInfo, rankings } = useLoaderData();

  const [pseudo, setPseudo] = useState("");
  const [data, setData] = useState();

  const user = rankings.find((ranking) => ranking.pseudo === userInfo.pseudo);

  const hanldeClickSearch = async (userPseudo) => {
    await myAxios
      .get(`/users/ranking?q=${userPseudo}`)
      .then((res) => setData(res.data.result))
      .catch((error) => console.info(error));
    setPseudo("");
  };

  return (
    <section className="rankingContainer">
      <div className="rankingHeader">
        <h2 className="rankingTitle">Classement</h2>
        <div className="userInfoContainer">
          <div className="userPicturePseudo">
            <div className="userPicture">
              <img src={userInfo.avatar} alt="avatar" className="userAvatar" />
            </div>
            <p className="userPseudo">@{user.pseudo}</p>
          </div>
          <div className="userScore">
            <div className="userRank">
              <p>Points</p>
              <p>{user.score}</p>
            </div>
            <div className="userRank">
              <p>Rang</p>
              <p>n°{user.ranking}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="usersRankingContainer">
        <input
          type="search"
          className="rankInput"
          value={pseudo}
          placeholder="Saisir un pseudo"
          onChange={(e) => setPseudo(e.target.value)}
        />
        <div className="btnRankContainer">
          <button
            type="button"
            onClick={() => hanldeClickSearch(pseudo)}
            className="btnRank valid"
          >
            ✔
          </button>
          <button
            type="button"
            onClick={() => hanldeClickSearch("")}
            className="btnRank refuse"
          >
            &#x2718;
          </button>
        </div>
        <RankingList rankings={rankings} data={data && data} />
      </div>
    </section>
  );
}
