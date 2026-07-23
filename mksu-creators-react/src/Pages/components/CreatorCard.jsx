import "./CreatorCard.css";

export function CreatorCard(props) {
  const {
    setVoteCount,
    voteCount,
    name,
    followers,
    image,
    setSelectedCreators,
    selectedCreators,
  } = props;
  return (
    <div className="creator-card">
      <img
        className={!image && "default-image"}
        src={image || "images/default.png"}
      />
      <div className="creator-card-text">
        <div>
          <p className="name">{name}</p>
        </div>
        <div className="creator-card-description">
          <p>{followers}k followers</p>
          <button
            onClick={() => {
              setVoteCount(voteCount + 1);
              setSelectedCreators([...selectedCreators, {
                image,
                name,
              }]);
            }}
          >
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}
