import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const PopularInstructors = () => {
  const { user, loading } = useAuth();

  // get popular instructors
  const { data: popularInstructors = [] } = useQuery({
    queryKey: ["instructors", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/popularInstructors`
      );
      return res.json();
    },
  });

  return (
    <div className="pt-16 md:pt-28">
      <Container>
        <SectionTitle
          heading="Popular Instructors"
          subHeading="Explore the Expertise of our Popular Yoga Instructors"
        />
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {popularInstructors.map((instructor) => (
              <SwiperSlide className="relative" key={instructor?._id}>
                <img
                  src={instructor?.image}
                  className="w-full h-[300px] sm:h-[450px] lg:h-[350px] xl:h-[400px] object-cover object-center rounded-2xl"
                  alt={instructor?.name}
                />
                <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold capitalize text-center absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center white-text my-bg p-3 rounded-2xl">
                  {instructor?.name}
                </h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default PopularInstructors;
