import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Header } from "./components/Header";
import Back from "./components/Back";
import { CategoryCard } from "./components/CategoryCard";
import { DevTools } from "./components/DevTools";

import "./JoinAsCreatorCss/1.css";
import "./JoinAsCreatorCss/media.css";

function StepOne(props) {
  const { formData, setFormData, setStep } = props;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function completeStepOne() {
    // form validation
    function validateForm() {
      if (!formData.fullName.trim()) {
        return "Full name is required";
      }
      if (!formData.username.trim()) {
        return "Username is required";
      }

      if (!formData.admission.trim()) {
        return "Admission number is required";
      }

      if (!formData.phoneNumber.trim()) {
        return "Phone number is required";
      }

      if (isNaN(formData.phoneNumber)) {
        return "phone number must be a number";
      }

      if (!formData.followers.trim()) {
        return "followers required";
      }

      if (isNaN(formData.followers)) {
        return "Followers must be a number";
      }
    }

    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }

    // after validation
    setStep(2);
  }

  return (
    <>
      <div className="intro">
        <div>Join as a creator</div>
        <div>Get votes from your followers</div>
      </div>

      <div className="join-tile">
        <h1 className="join-tile-title">Creator details</h1>

        <div className="name-section">
          {"\u2022"}
          <input
            className="join-tile-input"
            type="text"
            placeholder="Full Name"
            name="fullName"
            onChange={handleChange}
          />
        </div>

        <div className="handle-section">
          {"\u2022"}
          <input
            className="join-tile-input"
            type="text"
            placeholder="username eg. mutiso123"
            name="username"
            onChange={handleChange}
          />
        </div>

        <div className="admission-section">
          {"\u2022"}
          <input
            className="join-tile-input"
            type="text"
            placeholder="Adm. eg. J17-0458-2025"
            name="admission"
            onChange={handleChange}
          />
        </div>

        <div className="contact-section">
          {"\u2022"}
          <input
            className="join-tile-input"
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
            className="join-tile-select"
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
            className="join-tile-select"
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
            className="join-tile-input"
            type="text"
            placeholder="Followers eg. 6700"
            name="followers"
            onChange={handleChange}
          />
        </div>

        <button
          className="lets-go-btn"
          onClick={() => {
            completeStepOne()
          }}
        >
          Let's Go
        </button>
      </div>
    </>
  );
}

function StepTwo(props) {
  const { formData, setFormData, setStep } = props;

  return (
    <>
      <div className="js-container">
        <div className="join-as-creator-description">
          <h1 className="choose-your-category-title">Click your Category</h1>
          <p className="choose-your-category-text">
            Pick your content category. Make sure you choose carefully, to avoid
            any future inconveniences
          </p>
        </div>

        <div className="category-card-container">
          <CategoryCard
            name="dancer"
            image="images/dance.png"
            setFormData={setFormData}
            formData={formData}
            setStep={setStep}
          />
          <CategoryCard
            name="influencer"
            image="images/influencer.png"
            setFormData={setFormData}
            formData={formData}
            setStep={setStep}
          />
          <CategoryCard
            name="comedian"
            image="images/masks.png"
            setFormData={setFormData}
            formData={formData}
            setStep={setStep}
          />
          <CategoryCard
            name="vlogger"
            image="images/camera.png"
            setFormData={setFormData}
            formData={formData}
            setStep={setStep}
          />
          <CategoryCard
            name="musician"
            image="images/music-note.png"
            setFormData={setFormData}
            formData={formData}
            setStep={setStep}
          />
        </div>
      </div>
    </>
  );
}

function StepThree(props) {
  const { formData } = props;
  const [upload, setUpload] = useState();
  const navigate = useNavigate();

  async function finishUpload() {
    const form = new FormData();

    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    form.append("image", upload);
    
    const response = await fetch("http://localhost:3000/creators", {
      method: "POST",
      body: form,
    });

    const data = await response.json();
    console.log(data);

    toast("Details uploaded and are under review");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <div className="upload-section-container">
      <div className="join-tile upload-section">
        <div className="upload-section-title">
          Upload a passport of yourself
        </div>
        <div className="passport-section">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setUpload(e.target.files[0]);
            }}
          />
        </div>
        <button className="submit-button-join2" onClick={() => finishUpload()}>
          Finish
        </button>
      </div>
      <DevTools />
    </div>
  );
}

export function JoinAsCreatorOne() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    admission: "",
    phoneNumber: "",
    year: "1",
    platform: "tiktok",
    followers: "",
    category: "",
  });
  const [step, setStep] = useState(1);

  return (
    <>
      <Back navigate="/" />
      <Header />
      {step === 1 ? (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      ) : step === 2 ? (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      ) : step === 3 ? (
        <StepThree formData={formData} />
      ) : (
        ""
      )}
    </>
  );
}
