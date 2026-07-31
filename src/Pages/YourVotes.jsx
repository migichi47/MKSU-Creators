import { Link } from "react-router-dom";
import Back from "./components/Back";
import { CreatorCard } from "./components/CreatorCard";
import { Header } from "./components/Header";

import "./YourVotes.css";
import { DevTools } from "./components/DevTools";
import { toast } from "react-toastify";

export function YourVotes(props) {
  const {
    selectedCreators,
    setSelectedCreators,
    selectedCategories,
    setSelectedCategories,
  } = props;

  // send selected creators after user confirms
  function confirmSelectedVotes() {
    setSelectedCreators([]);
    localStorage.removeItem("selectedCreators");
  }

  // clear selected creators
  function clearSelectedCreators() {
    setSelectedCreators([]);
    setSelectedCategories([]);

    localStorage.removeItem("selectedCreators");
    localStorage.removeItem("selectedCategories");
  }

  function removeSelectedCreator(name, category) {
    const updatedCreators = selectedCreators.filter((creator) => {
      return creator.name !== name;
    });

    const updatedCategories = selectedCategories.filter(
      (cat) => cat !== category,
    );

    setSelectedCreators(updatedCreators);
    setSelectedCategories(updatedCategories);

    localStorage.setItem("selectedCreators", JSON.stringify(updatedCreators));
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(updatedCategories),
    );
  }

  // add auto-confirm of votes
  if (selectedCreators.length !== 0) {
    setTimeout(() => {
      confirmSelectedVotes();
    }, 60000 * 20);
  }

  return (
    <>
      <div className="your-votes-container">
        <Back navigate="/voting" />
        <Header />
        <div className="voters-grid js-voters-grid">
          {selectedCreators &&
            selectedCreators.map((creator) => (
              <div className="selected-creator-container">
                <div className="selected-creator-title">
                  Best {creator.category.slice(0, -1)}
                </div>
                <CreatorCard
                  name={creator.name}
                  image={creator.image}
                  followers={creator.followers}
                  category={creator.category}
                  key={creator.name}
                  removeSelectedCreator={removeSelectedCreator}
                />
              </div>
            ))}
        </div>

        {selectedCreators.length !== 0 ? (
          <div className="button-container">
            <div className="submit-button-container js-submit-button-container">
              <button
                className="your-votes-button submit-button js-submit-button"
                onClick={() => {
                  confirmSelectedVotes();
                  toast("Votes submitted successfully");
                }}
              >
                Confirm & Vote
              </button>
            </div>
            <div className="clear-button-container js-clear-button-container">
              <button
                className="your-votes-button clear-button js-clear-button"
                onClick={() => clearSelectedCreators()}
              >
                Clear List
              </button>
            </div>
          </div>
        ) : (
          <div className="your-votes-return-home">
            <div>Nothing here!</div>
            <div>
              Return to <Link to="/voting">Voting Page</Link>
            </div>
            <DevTools />
          </div>
        )}
      </div>
    </>
  );
}
