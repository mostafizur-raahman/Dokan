import { Link } from "react-router-dom";
import MenuItems from "../../Home/PopularSales/MenuItems";

const MenuCategory = ({ items }) => {
    return (
        <div>
            <div className="flex mt-10 md:grid grid-cols-3">
                {items?.map((item) => (
                    <MenuItems key={item._id} item={item}></MenuItems>
                ))}
            </div>
            <div className="text-center m-10">
                <Link to='/hotdeals'>
                    <button className="btn text-white bg-gradient-to-r from-sky-500 to-indigo-500">
                        Order Now!
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
