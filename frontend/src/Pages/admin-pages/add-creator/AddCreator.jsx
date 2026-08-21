const API_BASE_URL = import.meta.env.VITE_API_URL;

import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { AdminHeader } from "../components/AdminHeader";
import { AddCreatorForm } from "./AddCreatorForm";

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
  const navigate = useNavigate();

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

  function discardForm() {
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
    setUpload(null);
    setTimeout(() => {
      navigate("/admin");
    }, 500);
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

    const response = await fetch(`${API_BASE_URL}/creators/add`, {
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
        category: "",
      });
    }, 1000);
  }

  return (
    <>
      <AdminHeader />

      <div className="relative top-35 px-10 space-y-10 max-w-150 mx-auto mb-50">
        <div>
          <h1 className="font-bold text-2xl">Register New Creator</h1>
          <p className="text-xs text-neutral/80">
            Enter the details of the creator to add them to the election monitor
            database. Ensure all information is accurate.
          </p>
        </div>

        <AddCreatorForm
          upload={upload}
          setUpload={setUpload}
          handleChange={handleChange}
          formData={formData}
          discardForm={discardForm}
          finishUpload={finishUpload}
        />
      </div>
      <div
        onClick={() => navigate("/admin")}
        className="absolute left-6 top-25 z-1 text-tertiary/80 dark:text-neutral/80 text-sm flex gap-1 transition-transform hover:-translate-x-1 items-center hover:text-secondary cursor-pointer"
      >
        {" "}
        <IoArrowBack className="inline" />
        <span>back</span>
      </div>
    </>
  );
}
