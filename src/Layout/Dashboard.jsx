import { Link, Outlet } from "react-router-dom";
import {
    FaCartArrowDown,
    FaWallet,
    FaHome,
    FaCalendar,
    FaMedium,
    FaHotjar,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useCart from "../hooks/useCart";
const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here react outlet */}
                <Outlet></Outlet>
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
            </div>
            <div className="drawer-side bg-[#dc7deb]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content">
                    {/* Sidebar content here */}
                    <div>
                        <img
                            className="rounded-full"
                            src={user?.photoURL}
                            alt=""
                        />
                    </div>
                    <div className="text-xl font-bold text-white">
                        <p>Welcome , {user?.displayName || "Admin"}</p>
                    </div>
                    <li>
                        <Link>
                            <FaHome></FaHome>User Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/reservation">
                            <FaCalendar></FaCalendar>Reservation
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/history">
                            <FaWallet></FaWallet>Payment History
                        </Link>
                    </li>
                    <li className="flex">
                        <Link to="/dashboard/mycart">
                            <div className="flex items-center gap-1">
                                <FaCartArrowDown></FaCartArrowDown> My Cart
                                <span className="badge btn-secondary">
                                    +{cart?.length || 0}
                                </span>
                            </div>
                        </Link>
                    </li>
                    {/* divider */}
                    <div className="divider"></div>

                    <li>
                        <Link to="/">
                            <FaHome></FaHome> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu">
                            {" "}
                            <FaMedium></FaMedium> Menu
                        </Link>
                    </li>
                    <li>
                        <Link to="/hotdeals">
                            {" "}
                            <FaHotjar></FaHotjar> Hot deals
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
