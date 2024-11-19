import { useState } from "react";
import styles from "./Topbar.module.css";
import { FaRegBell } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import Select, { components } from "react-select";
import { SlArrowDown } from "react-icons/sl";
import LoginModal from "../LoginModal/LoginModal";

const options = [
  { value: "home", label: "Home" },
  { value: "contact", label: "Contact" },
  { value: "about", label: "About" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
    boxShadow: state.isFocused ? "none" : "none",
    color: "white",
    fontSize: "1rem",
    fontWeight: "200",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "black",
    width: "auto",
    minWidth: "100%",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "gray" : "black",
    color: "white",
    fontSize: "1rem",
    fontWeight: "200",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "gray",
    },
  }),
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <SlArrowDown color="white" />
    </components.DropdownIndicator>
  );
};

const NavSelector = () => (
  <Select
    styles={customStyles}
    components={{ DropdownIndicator }}
    className={styles.navSelect}
    options={options}
    placeholder="Select an option"
    isClearable={false}
    defaultValue={options[0]}
  />
);

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
