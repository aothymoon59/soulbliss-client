import useAuth from "../../hooks/useAuth";

const SectionTitle = ({ heading, subHeading }) => {
  const { themeIcon } = useAuth();
  return (
    <div
      className={`${
        themeIcon ? "black-text" : "white-text"
      } mx-auto text-center my-4 md:my-8 black-text jost-font`}
    >
      <h3 className="text-3xl lg:text-[40px] uppercase mb-4 font-semibold">
        {heading}
      </h3>
      <p className="md:text-xl mb-4">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
