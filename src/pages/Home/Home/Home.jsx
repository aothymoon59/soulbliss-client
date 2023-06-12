// import Spinner from "../../../components/Spinner/Spinner.jsx";
import Banner from "../Banner/Banner.jsx";
import { Helmet } from "react-helmet-async";
import Discount from "../Discount/Discount.jsx";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Soul Bliss - Home</title>
      </Helmet>
      <Banner></Banner>
      <Discount></Discount>
    </div>
  );
};

export default Home;
