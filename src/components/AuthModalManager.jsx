import React, { useState, useEffect } from "react";
import LoginModal from "./LoginModal/LoginModal";
import RegisterModal from "./RegisterModal/RegisterModal";

const AuthModalManager = ({ isOpen, onClose }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(isOpen);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    setIsLoginModalOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
    onClose();
  };

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const handleLoginClick = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleClose}
        onRegisterClick={handleRegisterClick}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={handleClose}
        onLoginClick={handleLoginClick}
      />
    </>
  );
};

export default AuthModalManager;
