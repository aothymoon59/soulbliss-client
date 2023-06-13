import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import "./PopularClass.css";

const PopularClasses = () => {
  const { user, loading } = useAuth();
  // get popular instructors
  const { data: popularClasses = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/popularClasses`);
      return res.json();
    },
  });

  console.log(popularClasses);
  return (
    <div className="pt-16 md:pt-28">
      <Container>
        <SectionTitle
          heading="Popular Classes"
          subHeading="Discover the Most Popular Yoga Classes"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularClasses.map((singleClass) => {
            return (
              <div key={singleClass?._id} className="card card-compact">
                <figure>
                  <img
                    className="class-img w-full h-[300px] sm:h-[450px] lg:h-[350px] xl:h-[400px] object-cover object-center"
                    src={singleClass?.classImg}
                    alt={singleClass?.name}
                  />
                </figure>
                <p className="bg-[#13795B] rounded-2xl text-white text-xl font-semibold absolute left-0 ml-4 mt-4 px-4">
                  ${singleClass?.price}
                </p>
                <div className="card-body text-center">
                  <h2 className="card-title justify-center">
                    {singleClass?.name}
                  </h2>
                  <p className="font-medium">
                    Instructor: {singleClass?.instructor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default PopularClasses;
