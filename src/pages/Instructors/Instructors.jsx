import { useQuery } from "@tanstack/react-query";
import Cover from "../../components/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Container from "../../components/Container/Container";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading, themeIcon } = useAuth();

  const { data: instructors = [] } = useQuery({
    queryKey: ["users", user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructors/all`);
      return res.data;
    },
  });

  return (
    <div>
      <Cover
        title="Flexibility is a second power"
        subTitle=" Practice yoga now, shape a brighter tomorrow, and embrace a future
        filled with wellness."
        img="https://i.ibb.co/SfS4p6K/instructor-page.jpg"
      ></Cover>
      <div className="mt-28">
        <SectionTitle
          heading="Our Instructors"
          subHeading="Inspiring Yoga Instructors: Guiding Your Journey Within"
        />
      </div>
      <Container>
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
  );
};

export default Instructors;
