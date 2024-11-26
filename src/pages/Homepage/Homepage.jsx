import ItemContainer from "../../components/ItemContainer/ItemContainer";
import MainGroup from "../../components/MainGroup/MainGroup";
import BottomCover from "../../components/BottomCover/BottomCover";
import TradeMarkCover from "../../components/TradeMarkCover/TradeMarkCover";
import styles from "./Homepage.module.css";
import Navbar from "./../../components/Navbar/Navbar";
import TopBannerOffer from "../../components/TopBannerOffer/TopBannerOffer";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Navbar />
      <TopBannerOffer />
      <MainGroup />
      <ItemContainer />
      <BottomCover />
      <TradeMarkCover />
    </div>
  );
};

export default HomePage;
