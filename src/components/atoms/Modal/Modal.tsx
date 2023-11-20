import React, { ReactNode } from "react";
import './Modal.scss'

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export function Modal({isOpen,toggle,children}: ModalType) {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
