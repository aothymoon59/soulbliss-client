import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const singleClass = useLoaderData();
  console.log(singleClass);
  return (
    <div>
      <Helmet>
        <title>Payment - Dashboard</title>
      </Helmet>
    </div>
  );
};

export default Payment;
