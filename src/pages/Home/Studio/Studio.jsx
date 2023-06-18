import { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Studio.css";

const Studio = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./studio.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <section className="py-16 md:py-28">
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
        </div>
      </Container>
    </section>
  );
};

export default Studio;
