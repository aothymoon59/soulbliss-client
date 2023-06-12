import { useLoaderData } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Feedback = () => {
  const singleClass = useLoaderData();

  const handleFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    console.log(feedback);

    fetch(
      `${import.meta.env.VITE_API_URL}/classes/feedback/${singleClass._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          e.target.reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `send feedback ${singleClass?.name}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Feedback - Dashboard</title>
      </Helmet>
      <SectionTitle
        heading="Feedback"
        subHeading="Effortlessly organize and enhance your yoga journey"
      />
      <div>
        <form onSubmit={handleFeedback}>
          <div className="lg:w-1/3 mx-auto">
            <textarea
              name="feedback"
              className="textarea textarea-bordered w-full"
              placeholder="Suggestion..."
            ></textarea>
            <button
              type="submit"
              className="my-btn hover:bg-transparent hover:text-[#13795B] transition-all duration-200 ease-linear mt-3"
            >
              Give Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
