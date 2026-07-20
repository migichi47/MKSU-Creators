import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { VotingPage } from "./Pages/VotingPage";
import { JoinAsCreatorOne } from "./Pages/JoinAsCreatorOne";
import { JoinAsCreatorTwo } from "./Pages/JoinAsCreatorTwo";
import { YourVotes } from "./Pages/YourVotes";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="voting" element={<VotingPage />} />
      <Route path="join-as-creator-one" element={<JoinAsCreatorOne />} />
      <Route path="join-as-creator-two" element={<JoinAsCreatorTwo />} />
      <Route path="your-votes" element={<YourVotes />} />
    </Routes>
  );
}
