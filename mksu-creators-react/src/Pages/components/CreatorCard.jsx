import "./CreatorCard.css";

export function CreatorCard(props) {
  const { setVoteCount, voteCount } = props;
  return (
    <div className="creator-card" onClick={() => setVoteCount(voteCount + 1)}>
      <img
        className={!props.image && "default-image"}
        src={props.image || "images/default.png"}
      />
      <div className="creator-card-text">
        <div>
          <p className="name">{props.name}</p>
        </div>
        <div className="creator-card-description">
          <p>{props.followers}k followers</p>
          <small>{"\u25CF"}</small>
          <p>Year {props.year || "N/A"} </p>
        </div>
      </div>
    </div>
  );
}
