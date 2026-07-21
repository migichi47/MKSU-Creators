import { creators } from "../../data/creators";

import { Header } from "./components/Header";
import Back from "./components/Back";
import { CategorySection } from "./components/CategorySection";

import "./VotingPageCss/main.css";
import "./VotingPageCss/media.css";

export function VotingPage() {
  return (
    <>
      <Back navigate="/" />
      <Header />

      <div className="preview-tiles-container">
        {
          Object.keys(creators).map((category) => (
            <CategorySection category={category} />
          ))
        }
      </div>
    </>
  );
}
