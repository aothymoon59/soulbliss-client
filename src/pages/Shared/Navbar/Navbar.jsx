import { Link, NavLink } from "react-router-dom";
import Container from "../../../components/Container/Container";
import LogoTitle from "../../../components/LogoTitle/LogoTitle";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          title="Home"
          className={({ isActive }) =>
            `px-3 transition-colors duration-300 transform  hover:bg-gray-300  hover:text-gray-700 ${
              isActive ? " theme-text" : "black-text"
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
              isActive ? " theme-text" : "black-text"
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
              isActive ? " theme-text" : "black-text"
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
              isActive ? " theme-text" : "black-text"
            }`
          }
        >
          <span className=" lg:text-lg font-medium">Dashboard</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed w-full my-bg black-text z-50 shadow-sm">
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
              <LogoTitle />
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
