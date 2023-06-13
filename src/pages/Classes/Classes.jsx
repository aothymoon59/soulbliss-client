import Cover from "../../components/Cover/Cover";
import coverImg from "../../assets/banner/class-banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "../../components/Container/Container";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/Spinner/Spinner";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const { themeIcon, user, loading } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();
  const location = useLocation();

  // get all approved class
  const { data: approvedClass = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/classes/approved/all`
      );
      return res.json();
    },
  });

  // select class
  const handleSelectClass = (selected) => {
    const {
      classImg,
      email,
      enrolled,
      feedback,
      instructor,
      name,
      price,
      seats,
      _id,
    } = selected;

    if (user && user?.email) {
      const selectedClass = {
        classImg,
        email,
        enrolled,
        feedback,
        instructor,
        name,
        price,
        seats,
        selectedId: _id,
        buyer_email: user.email,
      };
      fetch(`${import.meta.env.VITE_API_URL}/selected`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            navigate("/dashboard/selectedClass");
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class selected successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Helmet>
        <title>Classes - Home</title>
      </Helmet>
      <Cover
        title="Serenity is inside you"
        subTitle="Transform your practice and discover inner harmony through our diverse yoga classes"
        img={coverImg}
      ></Cover>
      <div className="mt-28">
        <SectionTitle
          heading="Classes"
          subHeading="Elevate your practice with transformative yoga classes"
        />
      </div>
      <Container>
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approvedClass.map((singleClass) => {
            return (
              <div
                key={singleClass?._id}
                className={`card card-compact w-full  shadow-xl flex flex-col ${
                  singleClass?.seats === 0 ? "bg-red-200" : "my-bg"
                } ${themeIcon ? "black-text" : "white-text"}`}
              >
                <figure className="flex-shrink-0">
                  <img
                    src={singleClass?.classImg}
                    className="class-img w-full h-[300px] sm:h-[450px] lg:h-[350px] xl:h-[400px] object-cover object-center"
                    alt="Instructor"
                  />
                </figure>

                <div className="card-body flex-grow">
                  <h2 className="card-title flex justify-between">
                    {singleClass?.name}{" "}
                    <span
                      className={`text-3xl ${
                        themeIcon ? "text-[#13795B]" : "white-text"
                      }`}
                    >
                      ${singleClass?.price}
                    </span>
                  </h2>
                  <p className="font-medium">
                    Instructor: {singleClass?.instructor}
                  </p>
                  <p>
                    Available seats:{" "}
                    <span className="badge badge-secondary badge-outline">
                      {singleClass?.seats}
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    {singleClass?.seats === 0 || isAdmin || isInstructor ? (
                      <button className="btn" disabled="disabled">
                        Select
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSelectClass(singleClass)}
                        className="my-btn hover:bg-transparent hover:text-[#13795B] transition-all duration-200 ease-linear"
                      >
                        Select
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Classes;
