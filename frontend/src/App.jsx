

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HomePage } from "./Pages/HomePage";
import { AdminPage } from "./Pages/admin-pages/AdminPage";
import { CreatorsPage } from "./Pages/admin-pages/CreatorsPage";
import { AdminAddCreator } from "./Pages/admin-pages/AdminAddCreator";

import "./App.css";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="admin" element={<AdminPage />} />
        <Route path="admin/creators" element={<CreatorsPage />} />
        <Route path="admin/add-creator" element={<AdminAddCreator />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
