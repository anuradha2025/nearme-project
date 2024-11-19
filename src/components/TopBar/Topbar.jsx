import { useState } from "react";
import styles from "./Topbar.module.css";
import { FaRegBell } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import LoginModal from "../LoginModal/LoginModal";
import NavSelector from "./NavSelector";

const Topbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <div className={styles.topBar}>
        <NavSelector />
        <FiMessageCircle className={styles.icon} />
        <FaRegBell className={styles.icon} />
        <button className={styles.loginButton} onClick={handleLoginClick}>
          Login
        </button>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Topbar;
