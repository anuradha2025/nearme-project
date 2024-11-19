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
      <div className="bg-red-500 text-white p-4">
        If this text has a red background, Tailwind is working.
      </div>
    </div>
  );
};

export default Homepage;
