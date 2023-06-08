import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";
import LogoTitle from "../../../components/LogoTitle/LogoTitle";

const Footer = () => {
  return (
    <div className="w-full my-bg black-text pt-10 pb-5">
      <Container>
        <footer className="footer">
          <div className="">
            <Link to="/">
              <LogoTitle />
            </Link>
            <p>
              Soul Bliss Yoga Camp School
              <br />
              Providing reliable tech since 2019
            </p>
          </div>
          <div>
            <span className="font-semibold theme-text text-lg">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className=" font-semibold theme-text text-lg">Company</span>
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
            <span className="font-semibold theme-text text-lg">Legal</span>
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
