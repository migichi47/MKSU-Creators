import "./CreatorCard.css";

export function CreatorCard(props) {
  const {
    name,
    followers,
    image,
    setSelectedCreators,
    selectedCreators,
    category,
    selectedCategories,
    setSelectedCategories,
  } = props;

  function selectCreator() {
    if (selectedCategories.includes(category)) {
      alert("Already voted in this category");
      return;
    }

    // update useState
    setSelectedCreators([
      ...selectedCreators,
      { image, name, followers, category },
    ]);

    setSelectedCategories([...selectedCategories, category]);

    // update local storage on categories
    localStorage.setItem(
      "selectedCreators",
      JSON.stringify([
        ...selectedCreators,
        { image, name, followers, category },
      ]),
    );

    localStorage.setItem(
      "selectedCategories",
      JSON.stringify([...selectedCategories, category]),
    );
  }

  console.log(selectedCategories);

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
