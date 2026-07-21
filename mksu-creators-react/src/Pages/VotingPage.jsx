import { Header } from "./components/Header";
import Back from "./components/Back";
import { CreatorCard } from "./components/CreatorCard";


import "./VotingPageCss/main.css";
import "./VotingPageCss/media.css";

export function VotingPage() {

  return (
    <>
      <Back navigate="/"/>
      <Header />

      <div className="preview-tiles-container">
        <div>
          <div className="tiles-title-div">
            <h2 id="dancers" className="tiles-title">
              Pick your dancer of the year
            </h2>
          </div>
          <div className="preview-tiles js-dancers">
            <CreatorCard />
          </div>
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
