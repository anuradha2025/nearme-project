import React, { useState } from "react";
import Select from "react-select";
import { CiSearch } from "react-icons/ci";
import ProductListing from "./ProductListing";
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
    <div className="flex flex-col items-center">
      <div className={`${styles.searchBarContainer} z-20`}>
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
          className={`${styles.searchBarInput} font-light text-center md:text-left`}
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
