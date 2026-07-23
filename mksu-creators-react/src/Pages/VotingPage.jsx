import { useState } from "react";

import { creators } from "../../data/creators";
import { Header } from "./components/Header";
import Back from "./components/Back";
import { CategorySection } from "./components/CategorySection";

import "./VotingPageCss/main.css";
import "./VotingPageCss/media.css";

export function VotingPage() {
  const [selectedCreators, setSelectedCreators] = useState(() => {
    return JSON.parse(localStorage.getItem('selectedCreators')) || [];
  });

  let voteCount = selectedCreators.length;

  console.log(selectedCreators);
  return (
    <>
      <Back navigate="/" />
      <Header voteCount={voteCount} />

      <div className="preview-tiles-container">
        {Object.keys(creators).map((category) => (
          <CategorySection
            category={category}
            setSelectedCreators={setSelectedCreators}
            selectedCreators={selectedCreators}
          />
        ))}
      </div>
    </>
  );
}
