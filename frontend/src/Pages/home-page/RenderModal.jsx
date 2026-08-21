import { useContext } from "react";
import { CompleteModal } from "../portals/CompleteModal";
import { CreatorContext } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

export function RenderModal({ renderModal, setRenderModal }) {
  const { votingComplete } = useContext(CreatorContext);
  const navigate = useNavigate();

  if (!renderModal) return;
  return (
    <CompleteModal
      isOpen={votingComplete}
      onClose={() => {
        setRenderModal(false);
      }}
    >
      <div className="">
        <h2 className="font-semibold text-lg">You voted in all categories</h2>
        <p className="text-sm text-zinc-800">Confirm your votes</p>
        <div>
          <button
            className="text-xs px-2 py-1 mt-2"
            onClick={() => navigate("/your-votes")}
          >
            Confirm
          </button>
        </div>
      </div>
    </CompleteModal>
  );
}
