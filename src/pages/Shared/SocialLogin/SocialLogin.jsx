import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const handleGoogleSignIn = () => {};
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
