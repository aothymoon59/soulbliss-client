import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const CheckoutForm = ({ singleClass }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (singleClass?.price) {
      axiosSecure
        .post("/create-payment-intent", { price: singleClass?.price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
          console.log(res);
        });
    }
  }, [axiosSecure, singleClass]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);
    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("[error]", confirmError);
      setCardError(confirmError.message);
    } else {
      setProcessing(false);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        // save payment info in db
        const paymentInfo = {
          ...singleClass,
          transactionId: paymentIntent.id,
          date: new Date(),
        };
        axiosSecure.post("/payments", paymentInfo).then((res) => {
          console.log(res.data);
          if (res.data.insertResult.insertedId) {
            const text = `Enrolled Successful!, TransactionId: ${paymentIntent.id}`;
            toast.success(text);
            navigate("/dashboard/enrolledClass");
          }
        });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || processing || !clientSecret}
          className="my-btn hover:bg-transparent hover:text-[#13795B] transition-all duration-200 ease-linear"
        >
          {processing ? (
            <FaSpinner className="animate-spin m-auto" />
          ) : (
            `Pay $${singleClass?.price}`
          )}
        </button>
      </form>
      {cardError && <p className="text-red-600 mt-4 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500 mt-4 ml-8">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
