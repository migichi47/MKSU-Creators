import { useState } from "react";
import { toast } from "react-toastify";

import { Header } from "../components/Header";
import { AdminSidebar } from "../utils/AdminSidebar";

export function AdminAddCreator() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    admission: "",
    phoneNumber: "",
    year: "1",
    platform: "tiktok",
    followers: "",
    category: "dancer",
  });

  const [upload, setUpload] = useState();

  function handleChange(e) {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  async function finishUpload() {
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
      if (!upload) {
        return "upload your photo";
      }
    }

    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    form.append("image", upload);

    const response = await fetch("http://localhost:3000/creators/add", {
      method: "POST",
      body: form,
    });

    const data = await response.json();
    console.log(data);

    toast("Creator added successfully");
    setTimeout(() => {
      setFormData({
        fullName: "",
        username: "",
        admission: "",
        phoneNumber: "",
        year: "1",
        platform: "tiktok",
        followers: "",
        category: "dancer",
      });
    }, 1000);
  }

  return (
    <>
      <AdminSidebar />
      <Header />

      <div className="join-tile join-tile-admin">
        <h1 className="join-tile-title">Add Creator details</h1>

        <div className="name-section">
          {"\u2022"}
          <input
            className="join-tile-input"
            type="text"
            placeholder="Full Name"
            name="fullName"
            onChange={handleChange}
            value={formData.fullName}
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
            value={formData.username}
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
            value={formData.admission}
          />
        </div>

        <div className="contact-section">
          {"\u2022"}
          <input
            className="join-tile-input "
            type="text"
            placeholder="Phone no."
            name="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
          />
        </div>

        <div className="academic-year-section">
          <p className="join-tile-text">Academic year</p>
          <select
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
          <p className="join-tile-text">Platform</p>
          <select
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
            value={formData.followers}
          />
        </div>

        <div>
          <p className="join-tile-text">category</p>
          <select
            name="category"
            className="join-tile-select"
            onChange={handleChange}
            value={formData.category}
          >
            <option value="dancer">dancer</option>
            <option value="vlogger">vlogger</option>
            <option value="musician">musician</option>
            <option value="influencer">influencer</option>
            <option value="comedian">comedian</option>
          </select>
        </div>

        <input
          type="file"
          name="image"
          accept="image/*"
          className="upload-image"
          onChange={(e) => setUpload(e.target.files[0])}
        />

        <button className="lets-go-btn" onClick={() => finishUpload()}>
          Finish
        </button>
      </div>
    </>
  );
}
