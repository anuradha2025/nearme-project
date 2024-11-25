import React, { useState } from "react";
import Select from "react-select";
import { CiSearch } from "react-icons/ci";
import { CSSTransition } from "react-transition-group";
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

// Mock search results
const mockResults = [
  {
    title: "Colombo City Center",
    address: "137 Sir James Peiris Mawatha, Colombo 02",
  },
  {
    title: "Galle Face Green",
    address: "2 Galle Road, Colombo 03",
  },
  {
    title: "Liberty Plaza",
    address: "250-269 R.A De Mel Mawatha, Colombo 03",
  },
  {
    title: "Majestic City",
    address: "10 Station Road, Colombo 04",
  },
];

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSearch = () => {
    if (searchText.trim()) {
      setShowResults(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
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

      <CSSTransition
        in={showResults}
        timeout={300}
        classNames={{
          enter: styles.resultsEnter,
          enterActive: styles.resultsEnterActive,
          exit: styles.resultsExit,
          exitActive: styles.resultsExitActive,
        }}
        unmountOnExit
      >
        <div className={styles.searchResults}>
          {mockResults.map((result, index) => (
            <div key={index} className={styles.resultItem}>
              <h4>{result.title}</h4>
              <p>{result.address}</p>
            </div>
          ))}
        </div>
      </CSSTransition>
    </>
  );
};

export default SearchBar;
