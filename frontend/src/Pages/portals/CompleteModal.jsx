import { createPortal } from "react-dom";

export function CompleteModal({ children, openModal, onClose }) {
  if (!openModal) return null;

  return createPortal(
    <div className="fixed flex top-0 left-0 right-0 bottom-0 justify-center items-center bg-black/70">
      <div>{children}</div>
      <button onClick={onClose}>close</button>
    </div>,
    document.body,
  );
}
