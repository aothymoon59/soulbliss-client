import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          title="Home"
          className={({ isActive }) =>
            `px-3 transition-colors duration-300 transform  hover:bg-gray-300  hover:text-gray-700 ${
              isActive ? " text-[#13795B]" : "text-black"
            }`
          }
        >
          <span className=" lg:text-lg font-medium">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          title="Instructors"
          className={({ isActive }) =>
            `px-3 transition-colors duration-300 transform  hover:bg-gray-300  hover:text-gray-700 ${
              isActive ? " text-[#13795B]" : "text-black"
            }`
          }
        >
          <span className=" lg:text-lg font-medium">Instructors</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          title="Classes"
          className={({ isActive }) =>
            `px-3 transition-colors duration-300 transform  hover:bg-gray-300 hover:text-gray-700 ${
              isActive ? " text-[#13795B]" : "text-black"
            }`
          }
        >
          <span className=" lg:text-lg font-medium">Classes</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          title="Dashboard"
          className={({ isActive }) =>
            `px-3 transition-colors duration-300 transform  hover:bg-gray-300  hover:text-gray-700 ${
              isActive ? " text-[#13795B]" : "text-black"
            }`
          }
        >
          <span className=" lg:text-lg font-medium">Dashboard</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed w-full my-bg text-black z-10 shadow-sm">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase"
              >
                {navOptions}
              </ul>
            </div>
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
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase">
              {navOptions}
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              to="/login"
              className="my-btn hover:bg-transparent hover:text-[#13795B] transition-all duration-200 ease-linear"
            >
              Login
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

// https://i.ibb.co/jDpVk8Q/lightlogo.png
