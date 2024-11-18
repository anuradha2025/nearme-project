import React from "react";
import Select from "react-select";

import { CiSearch } from "react-icons/ci";
import "../assets/styles/searchbar.css";

const categories = [
  {
    value: "category1",
    label: "Category 1",
  },

  {
    value: "category2",
    label: "Category 2",
  },

  {
    value: "category3",
    label: "Category 3",
  },
];

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      {" "}
      <Select
        options={categories}
        isMulti
        styles={customSelectStyles}
        placeholder="Category"
      />{" "}
      <input
        type="text"
        placeholder="Enter your location or search here to get started...."
        title="Enter your location or search here to get started...."
        className="search-bar-input"
      />{" "}
      <button className="search-bar-button">
        {" "}
        <CiSearch />{" "}
      </button>{" "}
    </div>
  );
};

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
    color: "white",
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
  }),
  option: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
};

export default SearchBar;
