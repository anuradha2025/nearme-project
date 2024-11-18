import "../assets/styles/Homepage.css";
import Topbar from "../components/Topbar";
import MainGroup from "../components/MainGroup";
import ItemContainer from "../components/ItemContainer";
import BottomCover from "../components/BottomCover";
import TradeMarkCover from "../components/TradeMarkCover";

const Homepage = () => {
  return (
    <div className="homepage">
      <Topbar />
      <MainGroup />
      <ItemContainer />
      <BottomCover />
      <TradeMarkCover />
    </div>
  );
};

export default Homepage;
