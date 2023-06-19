import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Discount from "../Home/Discount/Discount";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About - Soul Bliss</title>
      </Helmet>
      <Cover
        title="Our Yoga Adventure"
        subTitle="Connecting Mind, Body, and Spirit: Our Yoga Story"
        img="https://i.ibb.co/dK3b28D/klara-kulikova-6-Mx-PH-N4hu-E-unsplash.jpg"
      ></Cover>
      <div className="py-28">
        <Container>
          <SectionTitle
            heading="About Us"
            subHeading="Cultivating Balance and Bliss"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6">
            <div>
              <img src={"https://i.ibb.co/TBZxBZ4/bg.png"} alt="" />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold">
                Take Your Yoga to the Next Level
              </h2>
              <p className="text-lg">
                Modern yoga consists of a range of techniques including asanas
                (postures) and meditation derived from some of the philosophies,
                teachings and practices of the Yoga school, which is one of the
                six schools of traditional Hindu philosophies, and organised
                into a wide variety of schools and denominations. It has been
                described by Elizabeth de Michelis as having four types, namely:
                Modern Psych osomatic Yoga, as in The Yoga Institute.
              </p>
              <div className="mt-6">
                <Link
                  to="/instructors"
                  className="my-btn hover:bg-transparent hover:text-[#13795B] transition-all duration-200 ease-linear mt-6"
                >
                  Meet Our Instructors
                </Link>
              </div>
            </div>
          </div>
          <Discount />
        </Container>
      </div>
    </div>
  );
};

export default About;
