import React, { useEffect } from "react";
import Modal from "react-modal";
import styles from "./OverlayModal.module.css";

// Bind modal to appElement for accessibility
Modal.setAppElement("#root");

const OverlayModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const customStyles = {
    overlay: {
      backgroundColor: "hsla(0, 0%, 45%, 0.5)",
      backdropFilter: "blur(2px)",
      zIndex: 1000,
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#EDEDED",
      width: "95%",
      maxWidth: "56rem",
      padding: 0,
      border: "2px solid white",
      borderRadius: "0.8rem",
      overflow: "auto",
      maxHeight: "90vh", // Ensure the modal content is scrollable
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Overlay Modal"
      className={styles.modalAnimation}
    >
      <div className="container flex flex-col md:flex-row justify-between p-4 md:p-8 pb-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close modal"
        >
          ×
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default OverlayModal;
