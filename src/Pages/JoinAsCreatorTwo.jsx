import { useState } from "react";
import { Header } from "./components/Header";
import Back from "./components/Back";
import { CategoryCard } from "./components/CategoryCard";
import { DevTools } from "./components/DevTools";

import "./JoinAsCreatorCss/2.css";
import "./JoinAsCreatorCss/media.css";

export function JoinAsCreatorTwo() {
  const [clickedCategory, setClickedCategory] = useState(
    JSON.parse(localStorage.getItem("clickedCategory")) || "false",
  );

  return (
    <>
      <Back navigate="/join-as-creator-one" />
      <Header />

      <div className="js-container">
        <div className="join-as-creator-description">
          <h1 className="choose-your-category-title">Click your Category</h1>
          <p className="choose-your-category-text">
            Pick your content category. Make sure you choose carefully, to avoid
            any future inconveniences
          </p>
        </div>

        {clickedCategory === "false" ? (
          <div className="category-card-container">
            <CategoryCard
              name="dancing"
              image="images/dance.png"
              setClickedCategory={setClickedCategory}
            />
            <CategoryCard
              name="Social Influencer"
              image="images/influencer.png"
              setClickedCategory={setClickedCategory}
            />
            <CategoryCard
              name="Comedy"
              image="images/masks.png"
              setClickedCategory={setClickedCategory}
            />
            <CategoryCard
              name="Vlogging"
              image="images/camera.png"
              setClickedCategory={setClickedCategory}
            />
            <CategoryCard
              name="Music"
              image="images/music-note.png"
              setClickedCategory={setClickedCategory}
            />
          </div>
        ) : (
          <div className="upload-section-container">
            <div className="join-tile upload-section">
              <div className="upload-section-title">
                Upload a passport of yourself
              </div>
              <div className="passport-section">
                <input type="file" accept="image/*" />
              </div>
            </div>
            <DevTools />
          </div>
        )}
      </div>
    </>
  );
}
