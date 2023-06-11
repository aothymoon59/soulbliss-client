import Cover from "../../components/Cover/Cover";
import coverImg from "../../assets/banner/class-banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "../../components/Container/Container";
import useClasses from "../../hooks/useClasses";
import useAuth from "../../hooks/useAuth";

const Classes = () => {
  const [classes, refetch] = useClasses();
  const { themeIcon } = useAuth();
  return (
    <div>
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
          {classes.map((singleClass) => {
            return (
              <div
                key={singleClass?._id}
                className={`card card-compact w-full my-bg shadow-xl flex flex-col ${
                  themeIcon ? "black-text" : "white-text"
                }`}
              >
                <figure className="flex-shrink-0">
                  <img
                    src={singleClass?.classImg}
                    className="w-full h-[300px] sm:h-[450px] lg:h-[350px] xl:h-[400px] object-cover object-center"
                    alt="Instructor"
                  />
                </figure>
                <div className="card-body flex-grow">
                  <h2 className="card-title">{singleClass?.name}</h2>
                  <p className="font-medium">
                    Instructor: {singleClass?.instructor}
                  </p>
                  <p>
                    Available seats:{" "}
                    <div className="badge badge-secondary badge-outline">
                      {singleClass?.seats}
                    </div>
                  </p>
                  <div className="card-actions justify-end">
                    <button className="my-btn hover:bg-transparent hover:text-[#13795B] transition-all duration-200 ease-linear">
                      Select
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

export default Classes;
