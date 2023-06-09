import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SocialLogin = () => {
  const { googleSignIn, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully sign in!");
        navigate("/");
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
