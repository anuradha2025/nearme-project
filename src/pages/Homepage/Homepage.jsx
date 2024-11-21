import ItemContainer from "../../components/ItemContainer/ItemContainer";
import MainGroup from "../../components/MainGroup/MainGroup";
import BottomCover from "../../components/BottomCover/BottomCover";
import TradeMarkCover from "../../components/TradeMarkCover/TradeMarkCover";
import styles from "./Homepage.module.css";
// import Navbar from "../components/Navbar/Navbar";
const HomePage = () => {
  return (
    <div className={styles.homepage}>
      {/* <Navbar /> */}
      <MainGroup />
      <ItemContainer />
      <BottomCover />
      <TradeMarkCover />
    </div>
  );
};

export default HomePage;
