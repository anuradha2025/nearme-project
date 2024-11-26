import React, { useState } from "react";
import Select from "react-select";
import { CiSearch } from "react-icons/ci";
import ProductListing from "./ProductListing";
import styles from "./SearchBar.module.css";

const categories = [
  { value: "category1", label: "Category 1" },
  { value: "category2", label: "Category 2" },
  { value: "category3", label: "Category 3" },
  { value: "category4", label: "Category 4" },
  { value: "category5", label: "Category 5" },
  { value: "category6", label: "Category 6" },
  { value: "category7", label: "Category 7" },
  { value: "category8", label: "Category 8" },
  { value: "category9", label: "Category 9" },
  { value: "category10", label: "Category 10" },
];

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
    minWidth: "200px",
    maxWidth: "530px",
    fontWeight: "300",
    cursor: "pointer",
    // display: "flex",
    // flexWrap: "wrap",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "5px",
    padding: "2px 5px",
    display: "flex",
    alignItems: "center",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "white",
    backgroundColor: "transparent",
    padding: "0 5px",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "white",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      color: "black",
    },
  }),
  option: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
};

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showProductListing, setShowProductListing] = useState(false);

  const handleSearch = () => {
    if (searchText.trim()) {
      setShowProductListing(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center w-3/5">
      <div className="flex justify-start items-center w-full border border-gray-300 px-2.5 py-1.5 rounded-3xl bg-transparent text-md font-light z-20">
        <Select
          options={categories}
          isMulti
          styles={customSelectStyles}
          placeholder="Category"
          value={selectedCategories}
          onChange={setSelectedCategories}
        />
        <input
          type="text"
          placeholder="Enter your location or search here to get started...."
          title="Enter your location or search here to get started...."
          className="font-light outline-none bg-transparent border-none w-full text-md py-0 px-2.5 text-white text-center md:text-left"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className={styles.searchBarButton} onClick={handleSearch}>
          <CiSearch />
        </button>
      </div>

      {showProductListing && (
        <div className="w-full">
          <ProductListing
            searchText={searchText}
            selectedCategories={selectedCategories}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
