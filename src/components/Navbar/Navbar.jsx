import { useState } from "react";
import styles from "./Navbar.module.css";
import { FaRegBell } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import AuthModalManager from "../AuthModalManager";
import NavSelector from "./NavSelector";

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleClose = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <>
      <div className={`${styles.navbar} z-30`}>
        <NavSelector />
        <FiMessageCircle className={styles.icon} />
        <FaRegBell className={styles.icon} />
        <button className={styles.loginButton} onClick={handleLoginClick}>
          Login
        </button>
      </div>

      <AuthModalManager isOpen={isAuthModalOpen} onClose={handleClose} />
    </>
  );
};

export default Navbar;
