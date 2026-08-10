

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HomePage } from "./Pages/HomePage";
import { AdminPage } from "./Pages/admin-pages/AdminPage";
import { CreatorsPage } from "./Pages/admin-pages/CreatorsPage";
import { AdminAddCreator } from "./Pages/admin-pages/AdminAddCreator";

export default function App() {

  return (
    <div className="text-tertiary dark:text-neutral dark:bg-tertiary transition-colors">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="admin" element={<AdminPage />} />
        <Route path="admin/creators" element={<CreatorsPage />} />
        <Route path="admin/add-creator" element={<AdminAddCreator />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
