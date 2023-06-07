import { useContext, useEffect, useState } from "react";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const [disable, setDisable] = useState(true);
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const rep = location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogIn = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);
        // google email pass sign in AuthContext
        signIn(email, password).then((result) => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: "Login successfull! yo yo !",
                showClass: {
                    popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                },
            });
            navigate(rep, { replace: true });
        });
    };
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card w-1/2 flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
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
                                name="password"
                                placeholder="password"
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
                        {/* captcha  */}
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input
                                type="text"
                                onBlur={handleValidateCaptcha}
                                name="captcha"
                                placeholder="type the text captcha"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input
                                disabled={disable}
                                type="submit"
                                className="btn btn-primary"
                                value="Login"
                            />
                        </div>
                    </form>
                    <div className="text-blue-500 text-center mb-5">
                        <Link to="/signup">new to Dokan Sign up!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
