import { Routes, Route } from "react-router-dom";
import { useState } from "react";


import { HomePage } from "./Pages/HomePage";
import { VotingPage } from "./Pages/VotingPage";
import { JoinAsCreatorOne } from "./Pages/JoinAsCreatorOne";
import { JoinAsCreatorTwo } from "./Pages/JoinAsCreatorTwo";
import { YourVotes } from "./Pages/YourVotes";
import "./App.css";

export default function App() {
  const [selectedCreators, setSelectedCreators] = useState(() => {
    return JSON.parse(localStorage.getItem("selectedCreators")) || [];
  });

  const [selectedCategories, setSelectedCategories] = useState(() => {
    return JSON.parse(localStorage.getItem("selectedCategories")) || [];
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage />
        }
      />
      <Route path="voting" element={<VotingPage
            selectedCreators={selectedCreators}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            setSelectedCreators={setSelectedCreators}
          />} />
      <Route path="join-as-creator-one" element={<JoinAsCreatorOne />} />
      <Route path="join-as-creator-two" element={<JoinAsCreatorTwo />} />
      <Route path="your-votes" element={<YourVotes
            selectedCreators={selectedCreators}
            setSelectedCategories={setSelectedCategories}
            setSelectedCreators={setSelectedCreators}
          />} />
    </Routes>
  );
}
