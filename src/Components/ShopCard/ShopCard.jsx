import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const ShopCard = ({ items }) => {
    const { image, price, name, rating, _id } = items;

    const { user } = useContext(AuthContext);
    const [,refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddTocart = (items) => {
        console.log(items);
        if (user && user.email) {
            const cartItem = {
                shopItem: _id,
                name,
                image,
                price,
                email: user.email,
            };
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(cartItem),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        // refetch for cart update
                        refetch();
                        //sweet alert
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener(
                                    "mouseenter",
                                    Swal.stopTimer
                                );
                                toast.addEventListener(
                                    "mouseleave",
                                    Swal.resumeTimer
                                );
                            },
                        });

                        Toast.fire({
                            icon: "success",
                            title: "added to Cart",
                        });
                    }
                });
        } else {
            Swal.fire({
                title: "please log in for add to cart",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Log in Now!",
            }).then((result) => {
                if (result.isConfirmed) {
                    //
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <p>Rating:{rating}</p>
                <div className="card-actions hover:bg-pink-500 hover:p-2 hover:rounded-lg">
                    <button
                        onClick={() => handleAddTocart(items)}
                        className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white "
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;
