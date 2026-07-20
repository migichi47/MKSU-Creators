import "./JoinAsCreatorCss/join.css";
import "./JoinAsCreatorCss/media.css";

export function JoinAsCreatorOne() {
  return (
    <>
      <div className="back js-back">&#8592 Back</div>
      <div className="header">
        <img src="images/Machakos_University_Logo.png" alt="" />
        <h1>MKSU CREATORS AWARDS</h1>
        <hr className="header-hr" />
      </div>

      <div className="intro">
        <div>Join as a creator</div>
        <div>Get votes from your followers</div>
      </div>

      <div className="tile">
        <h1>Creator details</h1>

        <div className="name-section">
          &#8226
          <input
            className="js-name"
            type="text"
            placeholder="Name"
            name=""
            id=""
          />
        </div>

        <div className="admission-section">
          &#8226
          <input
            className="js-admission"
            type="text"
            placeholder="Adm. eg. J17-0458-2025"
          />
        </div>

        <div className="contact-section">
          &#8226
          <input className="js-contact" type="text" placeholder="Phone no." />
        </div>

        <div className="academic-year-section">
          &#8226<p>Academic year</p>
          <select title="year" className="js-year" name="" id="">
            <option value="1">Year 1</option>
            <option value="2">Year 2</option>
            <option value="3">Year 3</option>
            <option value="4">Year 4</option>
            <option value="5">Year 5</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className="platform-section">
          &#8226<p>Platform</p>
          <select title="year" className="js-platform" name="" id="">
            <option value="tiktok">TikTok</option>
            <option value="instagram">Instagram</option>
          </select>
        </div>

        <div className="followers-section">
          &#8226
          <input
            className="js-followers"
            type="text"
            placeholder="Followers eg. 6700"
          />
        </div>

        <div className="handle-section">
          &#8226
          <input
            className="js-handle"
            type="text"
            placeholder="handle   eg. @omondi"
            name=""
            id=""
          />
        </div>
        <button className="js-lets-go-btn">Let's Go</button>
      </div>
    </>
  );
}
