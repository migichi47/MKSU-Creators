import Back from "./components/Back";
import { CreatorCard } from "./components/CreatorCard";
import { Header } from "./components/Header";

import "./YourVotes.css";

export function YourVotes() {
  const selectedCreators = JSON.parse(localStorage.getItem("selectedCreators"));

  return (
    <>
      <div className="your-votes-container">
        <Back navigate="/voting" />
        <Header />

        <h1 className="your-votes-title">My Selected Creators</h1>
        <div className="voters-grid js-voters-grid">
          {selectedCreators &&
            selectedCreators.map((creator) => (
              <CreatorCard
                name={creator.name}
                image={creator.image}
                followers={creator.followers}
              />
            ))}
        </div>
        <div className="button-container">
          <div className="submit-button-container js-submit-button-container">
            <button className="your-votes-button submit-button js-submit-button">
              Confirm & Vote
            </button>
          </div>
          <div className="clear-button-container js-clear-button-container">
            <button className="your-votes-button clear-button js-clear-button">
              Clear List
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
