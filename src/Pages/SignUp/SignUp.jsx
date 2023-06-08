import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // firebase create user
        createUser(data.email, data.password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            // update ueer profile
            updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    //user info save
                    const saveUser = { name: data.name, email: data.email };

                    fetch("http://localhost:5000/users", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.insertedId) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "user created successfully!",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                                navigate("/");
                            }
                        });
                })
                .catch((e) => console.log(e));
        });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold mb-4 text-center">Sign up now!</h1>
                    <img src="https://i.ibb.co/Dk0W6GX/log.jpg" className="rounded-lgP" alt="" />
                </div>
                <div className="card w-1/2 flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                {...register("name")}
                                placeholder="name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input
                                type="text"
                                name="photoURL"
                                {...register("photoURL")}
                                placeholder="Photo url"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                {...register("email")}
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                {...register("password")}
                                className="input input-bordered"
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                value="Register"
                                className="btn btn-primary"
                            />
                        </div>
                    </form>
                    <Link
                        to="/login"
                        className="text-center mb-2 text-blue-500"
                    >
                        Already signup,pleaselogin
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
