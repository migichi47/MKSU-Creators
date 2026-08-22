/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../axios";

export const AddCreatorContext = createContext();
const API_BASE_URL = import.meta.env.VITE_API_URL;

export function AdminContextProvider({ children }) {
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
  const [allCreators, setAllCreators] = useState([]);
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

    const response = await api.post(`${API_BASE_URL}/creators/add`, form);
    console.log(response.data);

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

  useEffect(() => {
    async function getAllCreators() {
      try {
        const response = await api.get("/creators/all");
        setAllCreators(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getAllCreators();
  }, []);

  return (
    <AddCreatorContext.Provider
      value={{
        upload,
        setUpload,
        handleChange,
        formData,
        discardForm,
        finishUpload,
        setAllCreators,
        allCreators,
      }}
    >
      {children}
    </AddCreatorContext.Provider>
  );
}
