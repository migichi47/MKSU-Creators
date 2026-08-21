import { useContext } from "react";
import { AddCreatorContext } from "../AdminContextProvider";
import { TiUserAddOutline } from "react-icons/ti";

export function CallToActionButtons() {
  const { discardForm, finishUpload } = useContext(AddCreatorContext);

  return (
    <div className="[&>button]:border-0 text-sm flex justify-end items-center gap-5 p-5">
      <button
        className="hover:text-secondary bg-red-50/0 h-fit"
        onClick={discardForm}
      >
        Cancel
      </button>
      <button
        className="bg-secondary hover:bg-secondary/50 transition-colors text-neutral w-35 flex justify-center items-center gap-2 py-2"
        onClick={() => finishUpload()}
      >
        <span>
          <TiUserAddOutline />
        </span>
        Register Creator
      </button>
    </div>
  );
}
