import "./CreatorCard.css";

export function CreatorCard(props) {
  const { name, followers, image, setSelectedCreators, selectedCreators } =
    props;

  function selectCreator() {
    const newSelectedCreators = [
      ...selectedCreators,
      { image, name, followers },
    ];
    setSelectedCreators(newSelectedCreators);

    localStorage.setItem(
      "selectedCreators",
      JSON.stringify(newSelectedCreators),
    );
  }

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
          {props.isVotingPage && (
            <button
              onClick={() => {
                selectCreator();
              }}
            >
              Vote
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
