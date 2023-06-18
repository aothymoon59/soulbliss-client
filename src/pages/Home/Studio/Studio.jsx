import { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Studio.css";
import { Link } from "react-router-dom";

const Studio = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./studio.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="pt-16 md:pt-28">
      <Container>
        <SectionTitle heading="The Studio" subHeading="The Place You'll Love" />
        <div className="studio-bg bg-fixed py-20 px-5 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 p-3 sm:p-6 md:p-12 lg:w-2/3 mx-auto bg-black bg-opacity-40 rounded-tl-[50px] rounded-br-[50px]">
            {services.map((service) => (
              <div className="cursor-pointer" key={service?.id}>
                <img
                  className="w-12 h-12 mx-auto"
                  src={service?.icon}
                  alt={service?.name}
                />
                <h4 className="text-white text-center mt-4 font-medium sm:font-semibold">
                  {service?.name}
                </h4>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="my-5 text-[#cff699] text-2xl font-semibold">
              Yoga like never before
            </p>
            <Link
              to="/classes"
              className="my-btn hover:bg-transparent transition-all duration-200 ease-linear mt-6"
            >
              Try Our Class
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Studio;
