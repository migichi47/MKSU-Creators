import { useEffect } from "react";
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

  function selectCreator() {
    const newSelectedCreators = [...selectedCreators, { image, name }];
    setSelectedCreators(newSelectedCreators);

    localStorage.setItem(
      "selectedCreators",
      JSON.stringify(newSelectedCreators),
    );
  }

  useEffect(() => {
  }, [selectedCreators]);

  return (
    <div className="creator-card">
      <img
        className={image ? "" : "default-image"}
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
              selectCreator();
            }}
          >
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}
