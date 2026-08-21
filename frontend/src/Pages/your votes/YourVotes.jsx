import { useNavigate } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useContext, useEffect } from "react";
import { CreatorContext } from "../../context/ContextProvider";
import { SelectedCreatorsGrid } from "./SelectedCreatorsGrid";
import { CallToActionButtons } from "./CallToActionButtons";

export function YourVotes() {
  const navigate = useNavigate();
  const { selectedCreators } = useContext(CreatorContext);

  useEffect(() => {
    setTimeout(() => {
      if (selectedCreators.length === 0) {
        navigate("/");
      }
    }, 500);
  }, [navigate, selectedCreators]);

  return (
    <>
      <Header />
      <SelectedCreatorsGrid />
      <CallToActionButtons />
      <Footer />
    </>
  );
}
