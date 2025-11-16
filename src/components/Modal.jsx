import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ background: "#fff", padding: 20, borderRadius: 12 }}>
        {children}
        <button onClick={onClose} style={{ marginTop: 12 }}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;