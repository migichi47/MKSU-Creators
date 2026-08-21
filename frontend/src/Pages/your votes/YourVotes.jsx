import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useContext, useEffect } from "react";
import { CreatorContext } from "../../context/ContextProvider";
import { SelectedCreatorsGrid } from "./SelectedCreatorsGrid";

export function YourVotes() {
  const navigate = useNavigate();
  const {
    selectedCreators,
    clearCreators,
  } = useContext(CreatorContext);

  useEffect(() => {
    setTimeout(() => {
      if (selectedCreators.length === 0) {
        navigate("/");
      }
    }, 500);
  }, [navigate, selectedCreators]);

  return (
    <div>
      <Header />

      <SelectedCreatorsGrid />

      {/* action buttons */}
      <div className="mx-auto w-fit mt-10 flex gap-6 [&>a]:px-6 [&>a]:py-2 [&>a]:rounded-full [&>a]:cursor-pointer [&>a]:hover:scale-110 [&>a]:transition-all duration-200 [&>a]:hover:shadow-lg">
        <a className="bg-green-500/80" onClick={() => toast("Votes confirmed")}>
          Confirm Votes
        </a>
        <a className="bg-red-500/80" onClick={clearCreators}>
          Clear All
        </a>
      </div>

      <Footer />
    </div>
  );
}
