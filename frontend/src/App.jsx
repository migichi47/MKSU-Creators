import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HomePage } from "./Pages/HomePage";
import { AdminPage } from "./Pages/admin-pages/AdminPage";
import { CreatorsPage } from "./Pages/admin-pages/CreatorsPage";
import { AdminAddCreator } from "./Pages/admin-pages/AdminAddCreator";
import { YourVotes } from "./Pages/YourVotes";

export default function App() {
  const [selectedCreators, setSelectedCreators] = useState([
    {
      image: "/images/heismaema.png",
      name: "Heismaema",
      followers: "27100",
      category: "influencer",
      year: 4,
    },
    {
      image: "images/gym reaper.jpg",
      name: "Gym Reaper",
      followers: "2300",
      category: "influencer",
      year: 4,
    },
    {
      image: "images/_opiri.jpg",
      name: "_opiri",
      followers: "3300",
      category: "influencer",
      year: 4,
    },
  ]);

  return (
    <div className="text-tertiary dark:text-neutral dark:bg-tertiary transition-colors">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setSelectedCreators={setSelectedCreators}
              selectedCreators={selectedCreators}
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
