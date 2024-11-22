import styles from "./MainGroup.module.css";
import LogoText from "./LogoText";
import SearchBar from "./SearchBar";

const MainGroup = () => {
  return (
    <div className={styles.mainGroup}>
      <LogoText text="NearMe" />
      <p className={`${styles.mainGroupText} font-extralight`}>
        Find trusted <span>services</span> and top <span>products</span> in your
        area instantly.
        <br /> Start your search below
      </p>
      <SearchBar />
    </div>
  );
};

export default MainGroup;
