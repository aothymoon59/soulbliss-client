import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Subscribe = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
  };
  return (
    <section className="pt-16 md:pt-28">
      <Container>
        <div className="flex flex-col md:flex-row flex-wrap gap-3 items-center md:justify-around">
          <img
            src={"https://i.ibb.co/pZ3JBmc/banner-1.png"}
            className="w-[216px] h-[149px]"
            alt="company 1"
          />
          <img
            src={"https://i.ibb.co/LtyGLY6/banner-2.png"}
            className="w-[216px] h-[149px]"
            alt="company 2"
          />
          <img
            src={"https://i.ibb.co/k4Ds9xm/banner-3.png"}
            className="w-[216px] h-[149px]"
            alt="company 3"
          />
          <img
            src={"https://i.ibb.co/RBvp8fg/banner-4.png"}
            className="w-[216px] h-[149px]"
            alt="company 4"
          />
          <img
            src={"https://i.ibb.co/NrjR4mc/banner-5.png"}
            className="w-[216px] h-[149px]"
            alt="company 5"
          />
        </div>
        <form onSubmit={handleSubscribe} className="my-12">
          <SectionTitle
            heading="Subscribe to our newsletter"
            subHeading="Get updates for new classes and new products"
          />
          <div className="join w-full justify-center">
            <input
              className="input w-full max-w-xs input-bordered join-item"
              placeholder="Email"
            />
            <button
              type="submit"
              className="join-item my-btn hover:bg-transparent hover:text-[#13795B] transition-all duration-200 ease-linear rounded-r-full"
            >
              Subscribe
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Subscribe;
