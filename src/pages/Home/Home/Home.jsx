// import Spinner from "../../../components/Spinner/Spinner.jsx";
import Banner from "../Banner/Banner.jsx";
import { Helmet } from "react-helmet-async";
import Discount from "../Discount/Discount.jsx";
import PopularClasses from "../PopularClasses/PopularClasses.jsx";
import PopularInstructors from "../PopularInstructors/PopularInstructors.jsx";
import WhatsNumber from "../WhatsNumber/WhatsNumber.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import Studio from "../Studio/Studio.jsx";
import Subscribe from "../Subscribe/Subscribe.jsx";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Soul Bliss - Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <Discount></Discount>
      <PopularInstructors></PopularInstructors>
      <Studio></Studio>
      <WhatsNumber></WhatsNumber>
      <Testimonials />
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
