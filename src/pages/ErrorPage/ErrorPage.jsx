import Lottie from "lottie-react";
import errorAnimation from "../../assets/error.json";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";

const ErrorPage = () => {
  return (
    <Container>
      <div className="flex justify-center items-center h-screen">
        <div>
          <Lottie animationData={errorAnimation} loop={true} />
          <div className="text-center mt-6">
            <Link
              to="/"
              className="my-btn hover:bg-transparent hover:text-[#13795B] transition-all duration-200 ease-in-out"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ErrorPage;
