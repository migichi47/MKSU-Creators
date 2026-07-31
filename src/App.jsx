import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HomePage } from "./Pages/HomePage";
import { VotingPage } from "./Pages/VotingPage";
import { JoinAsCreatorOne } from "./Pages/JoinAsCreatorOne";
import { JoinAsCreatorTwo } from "./Pages/JoinAsCreatorTwo";
import { YourVotes } from "./Pages/YourVotes";
import "./App.css";
import { AdminPage } from "./Pages/AdminPage";

export default function App() {
  const [selectedCreators, setSelectedCreators] = useState(() => {
    return JSON.parse(localStorage.getItem("selectedCreators")) || [];
  });

  const [selectedCategories, setSelectedCategories] = useState(() => {
    return JSON.parse(localStorage.getItem("selectedCategories")) || [];
  });

  // from backend
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/creators")
      .then((response) => response.json())
      .then((data) => setCreators(data));
  }, []);

  // add auto-confirm of votes
  if (selectedCreators.length !== 0) {
    setTimeout(() => {
      setSelectedCreators([]);
      localStorage.removeItem("selectedCreators");
    }, 60000 * 20);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="voting"
          element={
            <VotingPage
              selectedCreators={selectedCreators}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              setSelectedCreators={setSelectedCreators}
              creators={creators}
            />
          }
        />
        <Route path="join-as-creator-one" element={<JoinAsCreatorOne />} />
        <Route path="join-as-creator-two" element={<JoinAsCreatorTwo />} />
        <Route
          path="your-votes"
          element={
            <YourVotes
              selectedCreators={selectedCreators}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              setSelectedCreators={setSelectedCreators}
            />
          }
        />
        <Route path="admin" element={<AdminPage creators={creators} />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
