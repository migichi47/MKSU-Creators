import { useContext } from "react";
import { CreatorContext } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

export function YourVotes() {
  const navigate = useNavigate();
  const { selectedCreators } = useContext(CreatorContext);

  return (
    selectedCreators?.length > 0 && (
      <div className="flex flex-col gap-2 mt-10 w-fit mx-auto items-center">
        <span>
          You picked
          <span className="text-xl mx-1">{selectedCreators.length}</span>
          creator. Confirm your votes below.
        </span>
        <button
          className="bg-amber-50/0 hover:bg-primary hover:text-neutral w-30"
          onClick={() => navigate("/your-votes")}
        >
          Confirm
        </button>
      </div>
    )
  );
}
