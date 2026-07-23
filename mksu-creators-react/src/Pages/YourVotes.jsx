import Back from "./components/Back";
import { Header } from "./components/Header";

import "./YourVotes.css";

export function YourVotes() {
  return (
    <>
      <div className="your-votes-container">
        <Back navigate="/voting" />
        <Header />
        
        <h1 className="your-votes-title" >My Selected Creators</h1>
        <div className="voters-grid js-voters-grid"></div>
        <div className="button-container">
          <div className="submit-button-container js-submit-button-container">
            <button className="your-votes-button submit-button js-submit-button">
              Confirm & Vote
            </button>
          </div>
          <div className="clear-button-container js-clear-button-container">
            <button className="your-votes-button clear-button js-clear-button">Clear List</button>
          </div>
        </div>
      </div>
    </>
  );
}
