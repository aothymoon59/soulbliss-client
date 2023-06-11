import useAuth from "../../hooks/useAuth";
import { Parallax } from "react-parallax";
import { Fade, Slide } from "react-awesome-reveal";

const Cover = ({ img, title, subTitle }) => {
  const { themeIcon } = useAuth();
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the instructor"
      strength={-200}
    >
      <div
        className={`flex h-[60vh] justify-center items-center bg-[#000000] bg-blend-multiply bg-cover bg-fixed bg-center ${
          themeIcon ? "bg-opacity-25" : "bg-opacity-60"
        }`}
      >
        <div className="sm:w-1/2 text-center my-bg p-5 md:p-10 rounded-2xl text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 leading-relaxed">
            {title}
          </h2>

          {/* <p className="text-base sm:text font-medium">{subTitle}</p> */}
          <Fade delay={1e3} cascade damping={1e-1}>
            {subTitle}
          </Fade>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
