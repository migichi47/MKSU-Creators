import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HomePage } from "./Pages/HomePage";
import { AdminPage } from "./Pages/admin-pages/AdminPage";
import { CreatorsPage } from "./Pages/admin-pages/CreatorsPage";
import { AdminAddCreator } from "./Pages/admin-pages/AdminAddCreator";
import { YourVotes } from "./Pages/YourVotes";

export default function App() {
  const [selectedCreators, setSelectedCreators] = useState(
    JSON.parse(localStorage.getItem("selectedCreators")) || [],
  );
  const [selectedCategories, setSelectedCategories] = useState(
    JSON.parse(localStorage.getItem("selectedCategories")) || [],
  );

  useEffect(() => {
    localStorage.setItem("selectedCreators", JSON.stringify(selectedCreators));
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCategories),
    );
  }, [selectedCreators, selectedCategories]);

  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setSelectedCreators={setSelectedCreators}
              selectedCreators={selectedCreators}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          }
        />
        <Route
          path="/your-votes"
          element={
            <YourVotes
              setSelectedCreators={setSelectedCreators}
              selectedCreators={selectedCreators}
            />
          }
        />

        <Route path="admin" element={<AdminPage />} />
        <Route path="admin/creators" element={<CreatorsPage />} />
        <Route path="admin/add-creator" element={<AdminAddCreator />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
