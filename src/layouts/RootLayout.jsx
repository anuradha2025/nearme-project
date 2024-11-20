import Topbar from "../components/TopBar/Topbar";
import BottomCover from "../components/BottomCover/BottomCover";
import TradeMarkCover from "../components/TradeMarkCover/TradeMarkCover";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[rgba(87,54,0,0.95)] to-black">
            <Topbar />
            <main>
                <Outlet />
            </main>
            <BottomCover />
            <TradeMarkCover />
        </div>
    );
};

export default RootLayout;