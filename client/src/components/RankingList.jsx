import PropTypes from "prop-types";

export default function RankingList({ rankings, data }) {
  return (
    <>
      <div className="rankingListTitle">
        <p>Rang</p>
        <p>Pseudo</p>
        <p>Points</p>
      </div>
      <div className="listRanking">
        {data
          ? rankings.map((ranking) =>
              data.map(
                (rankingData) =>
                  ranking.pseudo === rankingData.pseudo && (
                    <div key={ranking.pseudo} className="usersRanking">
                      <p>{ranking.ranking}</p>
                      <p>{ranking.pseudo}</p>
                      <p>{ranking.score}</p>
                    </div>
                  )
              )
            )
          : rankings.map((ranking) => (
              <div key={ranking.pseudo} className="usersRanking">
                <p>{ranking.ranking}</p>
                <p>{ranking.pseudo}</p>
                <p>{ranking.score}</p>
              </div>
            ))}
      </div>
    </>
  );
}

RankingList.propTypes = {
  rankings: PropTypes.arrayOf(
    PropTypes.shape({
      pseudo: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      ranking: PropTypes.number.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      pseudo: PropTypes.string.isRequired,
    })
  ).isRequired,
};
