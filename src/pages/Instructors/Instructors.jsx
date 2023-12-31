import { useQuery } from "@tanstack/react-query";
import Cover from "../../components/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";
import Container from "../../components/Container/Container";
import Spinner from "../../components/Spinner/Spinner";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const { user, loading, themeIcon } = useAuth();

  const { data: instructors = [] } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/users/instructors/all`
      );
      return res.json();
    },
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Helmet>
        <title>Instructors - Soul Bliss</title>
      </Helmet>
      <Cover
        title="Flexibility is a second power"
        subTitle="Inspiring guides to help you deepen your practice and unlock your full potential."
        img="https://i.ibb.co/SfS4p6K/instructor-page.jpg"
      ></Cover>
      <div className="mt-28">
        <Container>
          <SectionTitle
            heading="Our Instructors"
            subHeading="Inspiring Yoga Instructors: Guiding Your Journey Within"
          />
          <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor) => {
              return (
                <div
                  key={instructor?._id}
                  className={`card card-compact w-full my-bg shadow-xl flex flex-col ${
                    themeIcon ? "black-text" : "white-text"
                  }`}
                >
                  <figure className="flex-shrink-0">
                    <img
                      src={instructor?.image}
                      className="w-full h-[300px] sm:h-[450px] lg:h-[350px] xl:h-[400px] object-cover object-center"
                      alt="Instructor"
                    />
                  </figure>
                  <div className="card-body flex-grow">
                    <h2 className="card-title">{instructor?.name}</h2>
                    <p>Email: {instructor?.email}</p>
                    <div className="card-actions justify-end">
                      {/* TODO: optional task= see class will be update after assignment result */}
                      <button className="my-btn hover:bg-transparent hover:text-[#13795B] transition-all duration-200 ease-linear">
                        See Classes
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Instructors;
