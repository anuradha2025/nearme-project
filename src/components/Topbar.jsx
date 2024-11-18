import "../assets/styles/topbar.css";
import { FaRegBell } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import Select, { components } from "react-select";
import { FaChevronDown } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";

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
    className="nav-select"
    options={options}
    placeholder="Select an option"
    isClearable={false}
    defaultValue={options[0]}
  />
);

const Topbar = () => {
  return (
    <div className="top-bar">
      <NavSelector />
      <FiMessageCircle className="icon" />
      <FaRegBell className="icon" />
      <button className="login">Login</button>
    </div>
  );
};

export default Topbar;
