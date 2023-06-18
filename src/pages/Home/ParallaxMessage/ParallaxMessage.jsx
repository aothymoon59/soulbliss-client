import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";
import "./ParallaxMessage.css";

const ParallaxMessage = () => {
  return (
    <section className="pt-16 md:pt-28">
      <div className="parallax-bg bg-fixed py-28 px-5 md:px-12 lg:px-20">
        <Container>
          <div className="sm:p-3 md:p-12 xl:w-2/3 mx-auto">
            <h2 className="text-white text-3xl md:text-5xl text-center leading-[40px] md:leading-[60px]">
              Whoever you are and whatever you&apos;re looking for, you&apos;ll
              find your place at Soul Bliss
            </h2>
          </div>
          <div className="text-center mt-6">
            <Link
              to="/classes"
              className="my-btn hover:bg-transparent transition-all duration-200 ease-linear mt-6"
            >
              Enroll Now
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ParallaxMessage;
