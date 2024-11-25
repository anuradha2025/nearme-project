import React from "react";
import Modal from "react-modal";
import ProductListing from "./ProductListing";
import styles from "./SearchModal.module.css";

const SearchModal = ({ isOpen, onClose, searchText, selectedCategories }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Product Listing"
      className={`${styles.modal} z-40`}
      overlayClassName={styles.overlay}
    >
      <ProductListing
        searchText={searchText}
        selectedCategories={selectedCategories}
      />
    </Modal>
  );
};

export default SearchModal;
