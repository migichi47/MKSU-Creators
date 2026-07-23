import { useState } from "react";

import { creators } from "../../data/creators";
import { Header } from "./components/Header";
import Back from "./components/Back";
import { CategorySection } from "./components/CategorySection";

import "./VotingPageCss/main.css";
import "./VotingPageCss/media.css";

export function VotingPage() {
  const [voteCount, setVoteCount] = useState(0);
  const [selectedCreators, setSelectedCreators] = useState([]);

  console.log(selectedCreators);
  return (
    <>
      <Back navigate="/" />
      <Header voteCount={voteCount} />

      <div className="preview-tiles-container">
        {Object.keys(creators).map((category) => (
          <CategorySection
            category={category}
            setVoteCount={setVoteCount}
            voteCount={voteCount}
            setSelectedCreators={setSelectedCreators}
            selectedCreators={selectedCreators}
          />
        ))}
      </div>
    </>
  );
}
