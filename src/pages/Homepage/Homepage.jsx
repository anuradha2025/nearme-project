import styles from "./Homepage.module.css";
import Topbar from "../../components/TopBar/Topbar";
import MainGroup from "../../components/MainGroup/MainGroup";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import BottomCover from "../../components/BottomCover/BottomCover";
import TradeMarkCover from "../../components/TradeMarkCover/TradeMarkCover";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Topbar />
      <MainGroup />
      <ItemContainer />
      <BottomCover />
      <TradeMarkCover />
    </div>
  );
};

export default Homepage;
