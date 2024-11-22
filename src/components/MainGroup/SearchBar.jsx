import React from "react";
import Select from "react-select";
import { CiSearch } from "react-icons/ci";
import styles from "./SearchBar.module.css";

const categories = [
  { value: "category1", label: "Category 1" },
  { value: "category2", label: "Category 2" },
  { value: "category3", label: "Category 3" },
];

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
    minWidth: "150px",
    fontWeight: "300",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "white",
    backgroundColor: "transparent",
  }),
  option: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
};

const SearchBar = () => {
  return (
    <div className={`${styles.searchBarContainer}`}>
      <Select
        options={categories}
        isMulti
        styles={customSelectStyles}
        placeholder="Category"
      />
      <input
        type="text"
        placeholder="Enter your location or search here to get started...."
        title="Enter your location or search here to get started...."
        className={`${styles.searchBarInput} font-light text-center md:text-left`}
      />
      <button className={styles.searchBarButton}>
        <CiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
