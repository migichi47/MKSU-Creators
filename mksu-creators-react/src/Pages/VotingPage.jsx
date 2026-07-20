
import "./VotingPageCss/header.css";
import "./VotingPageCss/main.css";
import "./VotingPageCss/media.css";

export function VotingPage() {
  return (
    <>
      <div class="back js-back">{"\u2190"} Back</div>

      <div class="header">
        <div class="header-section js-header-section">
          <img src="images/Machakos_University_Logo.png" alt="" />
          <h1>MKSU CREATORS AWARDS</h1>
        </div>
        <hr class="header-hr" />
      </div>

      <div class="search-section">
        <input
          class="js-search-bar"
          placeholder="search creator"
          type="search"
        />
        <button class="js-search-button">&#128269;</button>
      </div>

      <div class="view-votes js-view-votes">
        <div>
          <h4>Your Votes</h4>
        </div>
        <div class="vote-count js-vote-count"></div>
        <button class="js-confirm-votes-btn">View votes</button>
      </div>

      <button class="js-reset-local-storage">dev tools</button>
      <br />
      <br />

      <div class="preview-tiles-container">
      <div>
        <div class="tiles-title-div">
          <h2 id="dancers" class="tiles-title">Pick your dancer of the year</h2>
        </div>
        <div class="preview-tiles js-dancers"></div>
      </div>
  
      <div>
        <div class="tiles-title-div">
          <h2 id="vloggers" class="tiles-title">Pick your vlogger of the year</h2>
        </div>
        <div class="preview-tiles js-vloggers"></div>
      </div>
  
      <div>
        <div class="tiles-title-div">
          <h2 id="comedians" class="tiles-title">
            Pick your Comedian of the year
          </h2>
        </div>
        <div class="preview-tiles js-comedians"></div>
      </div>
  
      <div>
        <div class="tiles-title-div">
          <h2 id="influencers" class="tiles-title">
            Pick your Influencer of the year
          </h2>
        </div>
        <div class="preview-tiles js-influencers"></div>
      </div>
  
      <div>
        <div class="tiles-title-div">
          <h2 id="musicians" class="tiles-title">
            Pick your Musician of the year
          </h2>
        </div>
        <div class="preview-tiles js-musicians"></div>
      </div>

    </div>
    </>
  );
}
