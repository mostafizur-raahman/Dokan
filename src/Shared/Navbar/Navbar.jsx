import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const[cart] = useCart(); // custom hook
    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch((e) => console.log(e));
    };
    const navOptions = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/menu">Menu</Link>
            </li>
            <li>
                <Link to="/hotdeals">Hot deals</Link>
            </li>
            {user ? (
                <>
                    <img
                        src={user?.photoURL                        }
                        className="rounded-full h-[50px] w-[50px]"
                        alt=""
                    />
                    <button onClick={handleLogout} className="btn btn-ghost">
                        Log out
                    </button>
                </>
            ) : (
                <>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                    <li>
                        <Link to="/login">Log in</Link>
                    </li>
                </>
            )}
            <li>
                <Link to='/dashboard/mycart'>
                    <p className="btn">
                        <FaShoppingCart></FaShoppingCart>
                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </p>
                </Link>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar text-white font-bold bg-orange-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <div className="flex items-center">
                                {navOptions}
                            </div>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">DOKAN</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className="flex items-center">{navOptions}</div>
                    </ul>
                </div>
                <div className="navbar-end">
                  <button className="btn btn-warning">Customer Care</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
