import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Header } from "./components/Header";
import Back from "./components/Back";
import { CategoryCard } from "./components/CategoryCard";
import { DevTools } from "./components/DevTools";

import "./JoinAsCreatorCss/2.css";
import "./JoinAsCreatorCss/media.css";

export function JoinAsCreatorTwo() {
  const [upload, setUpload] = useState();

  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("formData")) || {},
  );

  const [clickedCategory, setClickedCategory] = useState(
    JSON.parse(localStorage.getItem("clickedCategory")) || "false",
  );

  const navigate = useNavigate();

  async function finishUpload() {
    const form = new FormData();

    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    form.append("image", upload);
    console.log(formData);

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
              name="dancer"
              image="images/dance.png"
              setClickedCategory={setClickedCategory}
              setFormData={setFormData}
              formData={formData}
            />
            <CategoryCard
              name="influencer"
              image="images/influencer.png"
              setClickedCategory={setClickedCategory}
              setFormData={setFormData}
              formData={formData}
            />
            <CategoryCard
              name="comedian"
              image="images/masks.png"
              setClickedCategory={setClickedCategory}
              setFormData={setFormData}
              formData={formData}
            />
            <CategoryCard
              name="vlogger"
              image="images/camera.png"
              setClickedCategory={setClickedCategory}
              setFormData={setFormData}
              formData={formData}
            />
            <CategoryCard
              name="musician"
              image="images/music-note.png"
              setClickedCategory={setClickedCategory}
              setFormData={setFormData}
              formData={formData}
            />
          </div>
        ) : (
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
              <button
                className="submit-button-join2"
                onClick={() => finishUpload()}
              >
                Finish
              </button>
            </div>
            <DevTools />
          </div>
        )}
      </div>
    </>
  );
}
