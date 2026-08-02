import "./CreatorCard.css";

export function CreatorCard(props) {
  const {
    name,
    id,
    followers,
    image,
    selectedCreators,
    setSelectedCreators,
    category,
    selectedCategories,
    setSelectedCategories,
    isCategoryUsed,
    removeSelectedCreator,
  } = props;

  const isSelected = (selectedCreators || []).some(
    (creator) => creator.id === id,
  );

  console.log(selectedCreators);
  function selectCreator() {
    // update useState
    const currentCreators = selectedCreators || [];
    const currentCategories = selectedCategories || [];

    setSelectedCreators([
      ...currentCreators,
      { image, name, followers, category, id },
    ]);
    setSelectedCategories([...currentCategories, category]);

    // update local storage on categories
    localStorage.setItem(
      "selectedCreators",
      JSON.stringify([
        ...selectedCreators,
        { image, name, followers, category, id },
      ]),
    );
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify([...selectedCategories, category]),
    );
  }

  function removeCreator() {
    const updatedCreators = selectedCreators.filter(
      (creator) => creator.id !== id,
    );
    const updatedCategories = selectedCategories.filter(
      (cat) => cat !== category,
    );

    // update UI
    setSelectedCreators(updatedCreators);
    setSelectedCategories(updatedCategories);

    // update localStorage
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(updatedCategories),
    );

    localStorage.setItem("selectedCreators", JSON.stringify(updatedCreators));
  }

  return (
    <div className={`creator-card ${isSelected ? "selected" : ""}`}>
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
          {props.isVotingPage ? (
            <button
              onClick={isSelected ? removeCreator : selectCreator}
              className={`
                vote-btn
                ${isCategoryUsed ? "voted" : ""}
                ${isSelected ? "selected-remove-btn" : ""}
              `}
            >
              {isSelected ? "remove" : isCategoryUsed ? "" : "vote"}
            </button>
          ) : (
            <button
              className="selected-remove-btn"
              onClick={() => removeSelectedCreator(id, category)}
            >
              remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
