import "./CreatorCard.css";

export function CreatorCard(props) {
  const {
    name,
    followers,
    image,
    setSelectedCreators,
    category,
    selectedCategories,
    setSelectedCategories,
    isCategoryUsed,
  } = props;


  const selectedCreators = JSON.parse(localStorage.getItem("selectedCreators")) || [];
  const isSelected = selectedCreators.some((creator) => creator.name === name);

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

  function removeCreator() {
    const data = JSON.parse(localStorage.getItem("selectedCreators"));
    const updated = data.filter((creator) => creator.name !== name)

    console.log(name);
    console.log(updated);

    localStorage.setItem("selectedCreators", JSON.stringify(updated));
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
          {props.isVotingPage && (
            <button
              onClick={
                isSelected
                  ? () => {removeCreator()}
                  : () => {
                      selectCreator();
                    }
              }
              className={`
                vote-btn
                ${isCategoryUsed && "voted"}
                ${isSelected && "selected-remove-btn"}
              `}
            >
              {isSelected ? "remove" : isCategoryUsed ? "" : "vote"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
