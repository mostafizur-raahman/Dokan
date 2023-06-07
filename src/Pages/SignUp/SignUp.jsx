import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);

    const onSubmit = data =>{

        console.log(data);
        // firebase create user 
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            // update ueer profile
            updateUserProfile(data.name,data.photoURL)
        })

    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card w-1/2 flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                           <input type="submit" value="Register" className="btn btn-primary" />
                        </div>
                    </form>
                    <Link to='/login' className="text-center mb-2 text-blue-500">Already signup,pleaselogin</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
