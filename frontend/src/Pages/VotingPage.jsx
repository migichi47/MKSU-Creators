import { useNavigate } from "react-router-dom";

import { Header } from "./components/Header";
import Back from "./components/Back";
import { CategorySection } from "./components/CategorySection";

import "./VotingPageCss/main.css";

export function VotingPage(props) {
  const {
    creators,
    selectedCreators,
    setSelectedCreators,
    selectedCategories,
    setSelectedCategories,
  } = props;

  const categories = [
    "dancer",
    "vlogger",
    "influencer",
    "comedian",
    "musician",
  ];

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
        {categories.map((category) => (
          <CategorySection
            category={category}
            setSelectedCreators={setSelectedCreators}
            selectedCreators={selectedCreators}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            key={category}
            creators={creators}
          />
        ))}
      </div>
    </>
  );
}
