import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SocialLogin = () => {
  const { googleSignIn, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const loggedUser = res.user;
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          role: "user",
        };
        fetch(`${import.meta.env.VITE_API_URL}/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            setLoading(false);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="social-btn hover:bg-[#3cba54] text-[#3cba54] hover:text-white border-[#3cba54]"
      >
        <FaGoogle className="text-2xl" /> Login With Google
      </button>
    </div>
  );
};

export default SocialLogin;
