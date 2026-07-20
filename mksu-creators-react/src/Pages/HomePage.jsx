import { Header } from "./components/Header";

import "./HomePageCss/HomePage.css";
import "./HomePageCss/category.css";
import "./HomePageCss/about.css";
import "./HomePageCss/footer.css";
import "./HomePageCss/media.css";

export function HomePage() {
  return (
    <>
      <Header />
      <div className="main">
        <img
          className="cover-photo"
          src="images/Machakos_University.jpg"
          alt=""
        />
        <div className="overlay"></div>

        <div id="top" className="hero">
          <p className="description1">
            Machakos University creators awards are here!
          </p>
          <div className="hero-text">MKSU Grammys</div>
          <p className="description2">
            Vote for your favourite creators of the year
          </p>
          <div className="buttons-container">
            <button className="vote-now-btn js-vote-now-btn">Vote Now</button>
          </div>
          <div className="join-as-creator-section">
            <span className="join-as-creator-text">Are you a Creator ?</span>
            <button className="join-as-creator-button js-join-as-creator">Join now</button>
          </div>
        </div>

        <div className="about-section">
          <div className="about-hero">
            <div className="about-image-container">
              <img className="about-image" src="images/best-content-creator.webp" alt="" />
            </div>
            <div className="hero-description">
              <h1>Representation matters.</h1>
              <p className="h1-description">
                Seeing our faces in the media means everything
              </p>
              <h1 className="category-intro">
                MKSU Grammys therefore recognize:
              </h1>
              <ul className="category-container">
                <li className="category">Comedian of the Year 😂🤡</li>
                <p className="category-description">
                  Students super creative in comedy
                </p>

                <li className="category">Dancer of the Year 🕺💃</li>
                <p className="category-description">
                  Students cheering up platforms with unique dance moves
                </p>

                <li className="category">Musician of the Year 🎶🎤</li>
                <p className="category-description">
                  Outstanding musical talents spotted among students
                </p>

                <li className="category">Vlogger of the Year 🎥🤳</li>
                <p className="category-description">
                  Students who document their daily lifestyles behind lenses
                </p>

                <li className="category">Influencer of the Year 📝🎙️</li>
                <p className="category-description">
                  Student impacting the MKSU community
                </p>
              </ul>
            </div>
          </div>

          <div id="about" className="tile">
            <p className="tile-description">
              The MKSU Grammy Awards recognize outstanding achievements in
              various creative fields, including dancing, music, vlogging, and
              comedy. These awards celebrate innovation, creativity, and
              excellence among creators in the instituition.
            </p>

            <div className="card-container">
              <section className="home-page-card">
                <h2 className="card-header">Categories</h2>
                <ul>
                  <li>Comedian of the Year</li>
                  <li>Dancer of the Year</li>
                  <li>Musician of the Year</li>
                  <li>Vlogger of the Year</li>
                  <li>Influencer of the Year</li>
                </ul>
              </section>

              <section className="home-page-card">
                <h2>Voting</h2>
                <p>
                  Any Machakos university student can vote for the best creators
                  of their choice. Winners are announced, awarded and
                  celebrated, as the best content creators of the year.
                </p>
              </section>

              <section className="home-page-card">
                <h2>Award Ceremony</h2>
                <p>
                  The award ceremony is held annually in a prestigious venue.
                  The event includes performances and networking opportunities.
                </p>
              </section>
            </div>
          </div>

          <div className="category-section">
            <div className="category-header">
              <h1>Categories</h1>
              <hr />
            </div>

            <div className="category-card-container">
              <div className="category-card">
                <img src="images/dance.png" alt="" />
                <p>Dancing</p>
              </div>
              <div className="category-card">
                <img src="images/music-note.png" alt="" />
                <p>Music</p>
              </div>
              <div className="category-card">
                <img src="images/camera.png" alt="" />
                <p>Vlogging</p>
              </div>
              <div className="category-card">
                <img src="images/masks.png" alt="" />
                <p>Comedy</p>
              </div>
              <div className="category-card">
                <img src="images/influencer.png" alt="" />
                <p>Humanitary Impact</p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <div className="footer">
              <div className="collaborator-logo">
                Sponsored by:
                <img src="images/Migichi.png" alt="" />
              </div>
              <div className="collaborator-info"></div>
              <div className="footer-info">
                <a href="">Send Queries</a>
                <a href="">Contact Sponsors</a>
              </div>
            </div>
            <hr className="footer-hr" />
            <a href="#top">&#8593 Back to top</a>
            <br />
            <footer className="footer-details">
              <p>&copy; 2024 MKSU Creators Awards. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
