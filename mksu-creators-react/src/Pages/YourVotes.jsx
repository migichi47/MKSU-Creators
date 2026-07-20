import "./YourVotes.css";

export function YourVotes() {
  return (
    <>
      <div className="container">
        <div className="back js-back">&#8592 Back</div>
        <h1>My Selected Creators</h1>

        <div className="voters-grid js-voters-grid"></div>
        <div className="button-container">
          <div className="submit-button-container js-submit-button-container">
            <button className="submit-button js-submit-button">
              Confirm & Vote
            </button>
          </div>
          <div className="clear-button-container js-clear-button-container">
            <button className="clear-button js-clear-button">Clear List</button>
          </div>
        </div>
      </div>
    </>
  );
}
