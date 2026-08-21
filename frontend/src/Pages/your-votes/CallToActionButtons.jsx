import { useContext } from "react";
import { toast } from "react-toastify";
import { CreatorContext } from "../../context/ContextProvider";

export function CallToActionButtons() {
  const { clearCreators } = useContext(CreatorContext);

  return (
    <div className="mx-auto w-fit mt-10 flex gap-6 [&>a]:px-6 [&>a]:py-2 [&>a]:rounded-full [&>a]:cursor-pointer [&>a]:hover:scale-110 [&>a]:transition-all duration-200 [&>a]:hover:shadow-lg">
      <a className="bg-green-500/80" onClick={() => toast("Votes confirmed")}>
        Confirm Votes
      </a>
      <a className="bg-red-500/80" onClick={clearCreators}>
        Clear All
      </a>
    </div>
  );
}
