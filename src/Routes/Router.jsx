import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import HotDeals from "../Pages/HotDeals/HotDeals";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/Mycart/MyCart";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <Menu></Menu>,
            },
            {
                path: "/hotdeals",
                element: <HotDeals></HotDeals>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/secret",
                element: (
                    <PrivateRoute>
                        <Secret></Secret>
                    </PrivateRoute>
                ),
            },
        ],

    },
    {
        path:'/dashboard',
        element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'mycart',
                element: <MyCart></MyCart>
            }
        ]
    }
]);
export default router;
