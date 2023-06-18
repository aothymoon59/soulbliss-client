// import Spinner from "../../../components/Spinner/Spinner.jsx";
import Banner from "../Banner/Banner.jsx";
import { Helmet } from "react-helmet-async";
import Discount from "../Discount/Discount.jsx";
import PopularClasses from "../PopularClasses/PopularClasses.jsx";
import PopularInstructors from "../PopularInstructors/PopularInstructors.jsx";
import WhatsNumber from "../WhatsNumber/WhatsNumber.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";

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
      <WhatsNumber></WhatsNumber>
      <Testimonials />
    </div>
  );
};

export default Home;
