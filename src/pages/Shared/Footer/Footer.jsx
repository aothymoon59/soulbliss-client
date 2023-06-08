import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";

const Footer = () => {
  return (
    <div className="w-full my-bg text-black pt-10 pb-5">
      <Container>
        <footer className="footer">
          <div className="">
            <Link to="/">
              <div className="flex justify-center items-center">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium sm:font-bold">
                  Soul
                </span>
                <img
                  src={"https://i.ibb.co/fCxzStJ/darklogo.png"}
                  className="w-6 sm:w-8 md:w-10 lg:w-12"
                  alt="Nav Logo"
                />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium sm:font-bold">
                  Bliss
                </span>
              </div>
            </Link>
            <p>
              Soul Bliss Yoga Camp School
              <br />
              Providing reliable tech since 2019
            </p>
          </div>
          <div>
            <span className="font-semibold text-[#13795B] text-lg">
              Services
            </span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className=" font-semibold text-[#13795B] text-lg">
              Company
            </span>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/instructors" className="link link-hover">
              Instructors
            </Link>
            <Link to="/classes" className="link link-hover">
              Classes
            </Link>
            <Link to="/dashboard" className="link link-hover">
              Dashboard
            </Link>
          </div>
          <div>
            <span className="font-semibold text-[#13795B] text-lg">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
        <hr className="my-5" />
        <p className="text-center mx-4">
          Copyright © 2023 - All right reserved by Soul Bliss Yoga Camp School
        </p>
      </Container>
    </div>
  );
};

export default Footer;
