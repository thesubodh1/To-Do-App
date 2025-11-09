import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, ref }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },

      close: () => {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="modal">
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
