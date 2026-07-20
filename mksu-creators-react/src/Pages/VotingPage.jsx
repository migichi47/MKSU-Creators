import "./VotingPageCss/header.css";
import "./VotingPageCss/main.css";
import "./VotingPageCss/media.css";

export function VotingPage() {
  return (
    <>
      <div className="back js-back">{"\u2190"} Back</div>

      <div className="header">
        <div className="header-section js-header-section">
          <img src="images/Machakos_University_Logo.png" alt="" />
          <h1>MKSU CREATORS AWARDS</h1>
        </div>
        <hr className="header-hr" />
      </div>

      <div className="search-section">
        <input
          className="js-search-bar"
          placeholder="search creator"
          type="search"
        />
        <button className="js-search-button">&#128269;</button>
      </div>

      <div className="view-votes js-view-votes">
        <div>
          <h4>Your Votes</h4>
        </div>
        <div className="vote-count js-vote-count"></div>
        <button className="js-confirm-votes-btn">View votes</button>
      </div>

      <button className="js-reset-local-storage">dev tools</button>
      <br />
      <br />

      <div className="preview-tiles-container">
        <div>
          <div className="tiles-title-div">
            <h2 id="dancers" className="tiles-title">
              Pick your dancer of the year
            </h2>
          </div>
          <div className="preview-tiles js-dancers"></div>
        </div>

        <div>
          <div className="tiles-title-div">
            <h2 id="vloggers" className="tiles-title">
              Pick your vlogger of the year
            </h2>
          </div>
          <div className="preview-tiles js-vloggers"></div>
        </div>

        <div>
          <div className="tiles-title-div">
            <h2 id="comedians" className="tiles-title">
              Pick your Comedian of the year
            </h2>
          </div>
          <div className="preview-tiles js-comedians"></div>
        </div>

        <div>
          <div className="tiles-title-div">
            <h2 id="influencers" className="tiles-title">
              Pick your Influencer of the year
            </h2>
          </div>
          <div className="preview-tiles js-influencers"></div>
        </div>

        <div>
          <div className="tiles-title-div">
            <h2 id="musicians" className="tiles-title">
              Pick your Musician of the year
            </h2>
          </div>
          <div className="preview-tiles js-musicians"></div>
        </div>
      </div>
    </>
  );
}
