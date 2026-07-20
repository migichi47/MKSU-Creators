import "./JoinAsCreatorCss/register.css";
import "./JoinAsCreatorCss/media.css";

export function JoinAsCreatorTwo() {
  return (
    <>
      <div class="back js-back">&#8592 Back</div>
      <div class="header">
        <div class="header-section js-header-section">
          <img src="images/Machakos_University_Logo.png" alt="" />
          <h1>MKSU CREATORS AWARDS</h1>
        </div>
        <hr class="header-hr" />
      </div>

      <div class="js-container">
        <div class="description">
          <h1>Choose your Category</h1>
          <p>
            Pick your content category. Make sure you choose carefully, to avoid
            any future inconveniences
          </p>
        </div>

        <div class="category-card-container">
          <div class="category-card js-category-card" data-category="dancing">
            <img src="images/dance.png" alt="" />
            <div>Dancing</div>
          </div>
          <div
            class="category-card js-category-card"
            data-category="influencer"
          >
            <img src="images/influencer.png" alt="" />
            <div>Social Influencer</div>
          </div>
          <div class="category-card js-category-card" data-category="comedy">
            <img src="images/masks.png" alt="" />
            <div>Comedy</div>
          </div>
          <div class="category-card js-category-card" data-category="vlogging">
            <img src="images/camera.png" alt="" />
            <div>Vlogging</div>
          </div>
          <div class="category-card js-category-card" data-category="music">
            <img src="images/music-note.png" alt="" />
            <div>Music</div>
          </div>
        </div>
      </div>
    </>
  );
}
