import PropTypes from "prop-types";

export default function RankingList({ rankings, searchPseudo }) {
  return (
    <>
      <div className="rankingListTitle">
        <p>Rang</p>
        <p>Pseudo</p>
        <p>Points</p>
      </div>
      <div className="listRanking">
        {rankings
          .filter((ranking) =>
            ranking.pseudo.toLowerCase().includes(searchPseudo.toLowerCase())
          )
          .map((ranking) => (
            <div key={ranking.pseudo} className="usersRanking">
              <p>{rankings.indexOf(ranking) + 1}</p>
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
    })
  ).isRequired,
  searchPseudo: PropTypes.string.isRequired,
};
