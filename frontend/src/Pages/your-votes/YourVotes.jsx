import { useNavigate } from "react-router-dom";
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
      <SelectedCreatorsGrid />
      <CallToActionButtons />
    </>
  );
}
