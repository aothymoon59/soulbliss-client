import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Spinner from "../../../components/Spinner/Spinner";
import Container from "../../../components/Container/Container";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/reviews`);
        const data = await response.json();
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="pt-16 md:pt-28">
      <Container>
        <SectionTitle
          heading="Joyful Yoga Testimonials"
          subHeading="Hear How Soul Bliss Transformed Their Lives"
        />
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review?._id}>
              <div className="mx-14 md:mx-24 flex flex-col items-center">
                <FaQuoteLeft className="text-2xl sm:text-4xl lg:text-6xl mt-12" />
                <p className="mt-10 text-xl text-center md:w-2/3">
                  {review?.review}
                </p>
                <div>
                  <img
                    className="w-[50px] h-[50px] rounded-full mt-2 mx-auto"
                    src={review?.image}
                    alt={review?.name}
                  />
                  <h3 className="text-xl lg:text-2xl font-medium  mt-2">
                    {review?.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
