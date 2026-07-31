import { useNavigate } from "react-router-dom";

import { creators } from "../../data/creators";
import { Header } from "./components/Header";
import Back from "./components/Back";
import { CategorySection } from "./components/CategorySection";

import "./VotingPageCss/main.css";

export function VotingPage(props) {
  const {
    selectedCreators,
    setSelectedCreators,
    selectedCategories,
    setSelectedCategories,
  } = props;

  const navigate = useNavigate();

  let voteCount = selectedCreators.length;

  // add auto-confirm of votes
  if (selectedCreators.length !== 0) {
    setTimeout(() => {
      setSelectedCreators([]);
      localStorage.removeItem("selectedCreators");
    }, 60000 * 20);
  }

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
            key={category}
          />
        ))}
      </div>
    </>
  );
}
