import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";

import { FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact - Soul Bliss</title>
      </Helmet>
      <Cover
        title="Connect for Yoga"
        subTitle="Reach Out to Us for Yoga Queries"
        img="https://i.ibb.co/JBQGB1R/image-13.jpg"
      ></Cover>
      <div className="py-28">
        <div className="w-full max-w-7xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] justify-center items-center gap-6">
            <div>
              <div className="mb-6">
                <p className="md:text-xl mb-4">GET IN TOUCH</p>
                <h2 className="text-3xl lg:text-[40px] uppercase mb-4 font-semibold">
                  Send us a Message
                </h2>
              </div>
              <ContactForm />
            </div>
            <div className=" flex items-center flex-col gap-8">
              {/* card 1 */}
              <div className="flex flex-col lg:flex-row text-center lg:text-left gap-5 rounded-tl-[30px] rounded-br-[30px] items-center border shadow-md w-full lg:w-fit p-5">
                <div className="bg-[#13795B] p-3 rounded-full">
                  <FaMapMarkerAlt className="text-3xl text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">Location</h4>
                  <p>121 King Street, Melbourne</p>
                  <p>Victoria 3000 Australia</p>
                </div>
              </div>
              {/* card 2 */}
              <div className="flex flex-col lg:flex-row text-center lg:text-left gap-5 rounded-tl-[30px] rounded-br-[30px] items-center border shadow-md w-full lg:w-fit p-5">
                <div className="bg-[#13795B] p-3 rounded-full">
                  <FaPhoneAlt className="text-3xl text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">Phone</h4>
                  <p>121 King Street, Melbourne</p>
                  <p>Victoria 3000 Australia</p>
                </div>
              </div>
              {/* card 3 */}
              <div className="flex flex-col lg:flex-row text-center lg:text-left gap-5 rounded-tl-[30px] rounded-br-[30px] items-center border shadow-md w-full lg:w-fit p-5">
                <div className="bg-[#13795B] p-3 rounded-full">
                  <FaTelegramPlane className="text-3xl text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">Email</h4>
                  <p>121 King Street, Melbourne</p>
                  <p>Victoria 3000 Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
