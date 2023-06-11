import Spinner from "../../../components/Spinner/Spinner.jsx";
import Banner from "../Banner/Banner.jsx";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Soul Bliss - Home</title>
      </Helmet>
      <Banner></Banner>
      <Spinner></Spinner>
    </div>
  );
};

export default Home;
