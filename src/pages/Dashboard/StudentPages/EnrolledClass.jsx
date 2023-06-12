import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const EnrolledClass = () => {
  return (
    <div>
      <Helmet>
        <title>Enrolled Class - Dashboard</title>
      </Helmet>
      <SectionTitle
        heading="Enrolled Classes"
        subHeading="Explore Your Enrolled Classes: Stay Committed!"
      />
    </div>
  );
};

export default EnrolledClass;
