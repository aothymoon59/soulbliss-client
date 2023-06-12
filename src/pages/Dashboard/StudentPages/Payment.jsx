import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";
import paymentAnimation from "../../../assets/payment.json";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../../components/CheckoutForm/CheckoutForm";
const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_GateWay_PK}`);

const Payment = () => {
  const singleClass = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Payment - Dashboard</title>
      </Helmet>
      <SectionTitle
        heading="Payment"
        subHeading="Unlock the Power of Transformation with Secure Payments"
      />

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 my-20">
        <div className="w-full lg:w-[50%]">
          <Elements stripe={stripePromise}>
            <CheckoutForm singleClass={singleClass} />
          </Elements>
        </div>
        <div className="w-full lg:w-[50%]">
          <Lottie
            className="lg:w-3/4 mr-auto"
            animationData={paymentAnimation}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
