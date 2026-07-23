import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { creators } from "../../data/creators";
import { Header } from "./components/Header";
import Back from "./components/Back";
import { CategorySection } from "./components/CategorySection";

import "./VotingPageCss/main.css";
import "./VotingPageCss/media.css";

export function VotingPage() {
  const [selectedCreators, setSelectedCreators] = useState(() => {
    return JSON.parse(localStorage.getItem("selectedCreators")) || [];
  });

  const [selectedCategories, setSelectedCategories] = useState(() => {
    return JSON.parse(localStorage.getItem("selectedCategories")) || []
  });

  const navigate = useNavigate();
  let voteCount = selectedCreators.length;

  return (
    <>
      <Back navigate="/" />
      <Header voteCount={voteCount} />

      <div className="confirm-votes">
        <div className="vote-count">{voteCount ?? 0}</div>
        <p>votes</p>
        <button onClick={() => navigate("/your-votes")}>confirm</button>
      </div>

      <div className="preview-tiles-container">
        {Object.keys(creators).map((category) => (
          <CategorySection
            category={category}
            setSelectedCreators={setSelectedCreators}
            selectedCreators={selectedCreators}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        ))}
      </div>
    </>
  );
}
