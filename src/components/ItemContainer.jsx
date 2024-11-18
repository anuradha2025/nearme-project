
import '../assets/styles/ItemContainer.css';
import { IoFastFoodOutline } from "react-icons/io5";
import { FaLaptop } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { PiVanThin, PiPottedPlantLight } from "react-icons/pi";
import { GiAutoRepair, GiSittingDog, GiWatch, GiCardboardBoxClosed } from "react-icons/gi";

const ItemContainer = () => {
    const items = [
        { id: 1, icon: <IoFastFoodOutline />, title: "Foods" },
        { id: 2, icon: <FaLaptop />, title: "Electronics" },
        { id: 3, icon: <FaHouseChimney />, title: "Property" },
        { id: 4, icon: <PiVanThin />, title: "Vehicles" },
        { id: 5, icon: <GiAutoRepair />, title: "Services" },
        { id: 6, icon: <PiPottedPlantLight />, title: "Home & Garden" },
        { id: 7, icon: <GiSittingDog />, title: "Animals" },
        { id: 8, icon: <GiWatch />, title: "Fashion & Beauty" },
        { id: 9, icon: <GiCardboardBoxClosed />, title: "Other" },
    ]

    return (
        <div className="home-item-wrapper">
            {items.map(item => {
                return (
                    <div className='item-container'>
                        <div key={item.id} className="item">
                            <div className="item-icon">
                                {item.icon}
                            </div>
                        </div>
                        <p className="item-title">{item.title}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default ItemContainer;