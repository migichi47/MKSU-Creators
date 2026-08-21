import { createPortal } from "react-dom";
import { MdCancel } from "react-icons/md";

export function CompleteModal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed flex top-0 left-0 right-0 bottom-0 text-black text-center justify-center items-center bg-black/70">
      <div className="flex relative flex-col bg-white rounded-2xl px-5 pt-8 pb-5">
        <MdCancel
          className="absolute right-5 top-3 text-xl"
          onClick={onClose}
        />
        <div className="">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
