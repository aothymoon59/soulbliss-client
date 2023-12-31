import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login-1.json";
import { useForm } from "react-hook-form";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { loading, setLoading, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then(() => {
        reset();
        toast.success("Successfully sign in!");
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <Container>
      <Helmet>
        <title>Login - Soul Bliss</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 my-20">
        <div className="w-full lg:w-[50%]">
          <Lottie
            className="lg:w-3/4 mr-auto"
            animationData={loginAnimation}
            loop={true}
          />
        </div>
        <div className="w-full lg:w-[50%] my-bg px-5 py-10 rounded-xl card-shadow">
          <h2 className="text-3xl text-center font-semibold mb-10">
            Login to your account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
              />
              {errors.email && (
                <span className="text-red-600 mt-2">Email is required</span>
              )}
            </div>
            <div className="form-control mb-6 relative">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                {...register("password", {
                  required: true,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 mt-2">Password is required</p>
              )}
              <p
                className="absolute top-[54px] right-[15px]"
                onClick={() => setShowPass(!showPass)}
              >
                <small>{showPass ? <FaEye /> : <FaEyeSlash />}</small>
              </p>
            </div>
            <button
              type="submit"
              className="my-btn w-full hover:bg-transparent hover:text-[#13795B] transition-all duration-200 ease-in-out"
            >
              {loading ? (
                <ImSpinner9 className="m-auto animate-spin" size={24} />
              ) : (
                "Login"
              )}
            </button>
            <p className="text-center mt-4 mb-6">
              <small>
                New user?{" "}
                <Link to="/signUp" className="font-semibold theme-text">
                  Register
                </Link>
              </small>
            </p>
          </form>
          <div className="divider mb-6">OR</div>
          {/* Social login  */}
          <SocialLogin />
        </div>
      </div>
    </Container>
  );
};

export default Login;
