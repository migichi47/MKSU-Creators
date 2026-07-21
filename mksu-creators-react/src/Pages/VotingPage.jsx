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
        <CategorySection category="dancer" />
        <CategorySection category="vlogger" />
        <CategorySection category="influencer" />
      </div>
    </>
  );
}
