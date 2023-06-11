import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import "./Banner.css";

import slide1 from "../../../assets/banner/slider-1.jpg";
import slide2 from "../../../assets/banner/slider-2.jpg";
import slide3 from "../../../assets/banner/slider-3.jpg";
import useAuth from "../../../hooks/useAuth";

const Banner = () => {
  const { themeIcon } = useAuth();
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        className="mySwiper"
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={slide1}
              className="h-[calc(100vh-76px)] w-full object-cover object-center"
              alt="slide 1"
            />
            <div
              className={`slider-content flex justify-center items-center bg-black h-full w-full mx-auto absolute p-5 ${
                themeIcon ? "bg-opacity-25" : "bg-opacity-60"
              }`}
            >
              <div className="sm:w-1/2 text-center my-bg p-5 md:p-10 rounded-2xl text-white word-wrap">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 leading-relaxed">
                  <span className="firstWord word">Flow with Grace</span>
                  <span className="middleword">Expand Consciousness</span>
                  <span className="lastworld word">Embrace Serenity</span>
                  {/* Serenity is inside you */}
                </h2>
                <p className="text-base sm:text-lg font-medium">
                  Master your physical self, liberate the essence of your soul,
                  and find true freedom within.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={slide2}
              className="h-[calc(100vh-76px)] w-full object-cover object-center"
              alt="slide 1"
            />
            <div
              className={`slider-content flex justify-center items-center bg-black h-full w-full mx-auto absolute p-5 ${
                themeIcon ? "bg-opacity-25" : "bg-opacity-60"
              }`}
            >
              <div className="sm:w-1/2 text-center my-bg p-5 md:p-10 rounded-2xl text-white word-wrap">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 leading-relaxed">
                  <span className="firstWord word">Find Balance</span>
                  <span className="middleword">Discover Strength</span>
                  <span className="lastworld word">Cultivate Inner Peace</span>
                  {/* Flexibility is a second power */}
                </h2>
                <p className="text-base sm:text font-medium">
                  Practice yoga now, shape a brighter tomorrow, and embrace a
                  future filled with wellness.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={slide3}
              className="h-[calc(100vh-76px)] w-full object-cover object-center"
              alt="slide 1"
            />
            <div
              className={`slider-content flex justify-center items-center bg-black h-full w-full mx-auto absolute p-5 ${
                themeIcon ? "bg-opacity-25" : "bg-opacity-60"
              }`}
            >
              <div className="sm:w-1/2 text-center my-bg p-5 md:p-10 rounded-2xl text-white word-wrap">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 leading-relaxed">
                  <span className="firstWord word">Connect Mind</span>
                  <span className="middleword">Nurture Body</span>
                  <span className="lastworld word">Elevate Spirit</span>
                  {/* Inspiration for joyful living */}
                </h2>
                <p className="text-base sm:text font-medium">
                  Embrace the flexible theme that gracefully flows and practices
                  yoga alongside your journey
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
