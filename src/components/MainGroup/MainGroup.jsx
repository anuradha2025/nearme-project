import styles from "./MainGroup.module.css";
import GradientText from "./GradientText";
import SearchBar from "./SearchBar";

const MainGroup = () => {
  return (
    <div className={styles.mainGroup}>
      <GradientText
        text="NearMe"
        gradientColors={[
          { color: "#e2509f", stop: "0%" },
          { color: "#d9a441", stop: "45%" },
          { color: "#de4e31", stop: "100%" },
        ]}
      />
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
