import { Header } from "./components/Header";
import { useNavigate } from "react-router-dom";
import Back from "./components/Back";

import "./JoinAsCreatorCss/1.css";
import "./JoinAsCreatorCss/media.css";
import { useState } from "react";

export function JoinAsCreatorOne() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    admission: "",
    phoneNumber: "",
    year: "",
    platform: "",
    followers: "",
  });

  const navigate = useNavigate();
  function submitCreatorDetails() {
    // navigate("/join-as-creator-two");
    console.log(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Back navigate="/" />
      <Header />

      <div className="intro">
        <div>Join as a creator</div>
        <div>Get votes from your followers</div>
      </div>

      <div className="join-tile">
        <h1 className="join-tile-title">Creator details</h1>

        <div className="name-section">
          {"\u2022"}
          <input
            className="join-tile-input js-name"
            type="text"
            placeholder="Full Name"
            name="fullName"
            onChange={handleChange}
          />
        </div>

        <div className="handle-section">
          {"\u2022"}
          <input
            className="join-tile-input js-handle"
            type="text"
            placeholder="username eg. mutiso123"
            name="username"
            onChange={handleChange}
          />
        </div>

        <div className="admission-section">
          {"\u2022"}
          <input
            className="join-tile-input js-admission"
            type="text"
            placeholder="Adm. eg. J17-0458-2025"
            name="admission"
            onChange={handleChange}
          />
        </div>

        <div className="contact-section">
          {"\u2022"}
          <input
            className="join-tile-input js-contact"
            type="text"
            placeholder="Phone no."
            name="phoneNumber"
            onChange={handleChange}
          />
        </div>

        <div className="academic-year-section">
          <p className="join-tile-text">{"\u2022"} Academic year</p>
          <select
            title="year"
            className="join-tile-select js-year"
            onChange={handleChange}
            name="year"
            value={formData.year}
          >
            <option value="1">Year 1</option>
            <option value="2">Year 2</option>
            <option value="3">Year 3</option>
            <option value="4">Year 4</option>
            <option value="5">Year 5</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className="platform-section">
          {"\u2022"}
          <p className="join-tile-text">Platform</p>
          <select
            title="year"
            className="join-tile-select js-platform"
            onChange={handleChange}
            name="platform"
            value={formData.platform}
          >
            <option value="tiktok">TikTok</option>
            <option value="instagram">Instagram</option>
          </select>
        </div>

        <div className="followers-section">
          {"\u2022"}
          <input
            className="join-tile-input js-followers"
            type="text"
            placeholder="Followers eg. 6700"
            name="followers"
            onChange={handleChange}
          />
        </div>

        <button className="lets-go-btn" onClick={() => submitCreatorDetails()}>
          Let's Go
        </button>
      </div>
    </>
  );
}
