import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import LogoTitle from "../LogoTitle/LogoTitle";
import AdminMenu from "./AdminMenu";
import InstructorMenu from "./InstructorMenu";
import StudentMenu from "./StudentMenu";
import useAuth from "../../hooks/useAuth";
import {
  FaBuromobelexperte,
  FaChalkboardTeacher,
  FaHome,
  FaSignOutAlt,
} from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const Sidebar = () => {
  const [isActive, setActive] = useState("false");
  const { user, themeIcon, logOut } = useAuth();
  const navigate = useNavigate();
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <>
      {/* Small Screen Navbar */}
      <div
        className={`flex justify-between md:hidden ${
          themeIcon ? "my-bg black-text" : "white-text dark-bg"
        }`}
      >
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <LogoTitle />
            </Link>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-teal-300"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden my-bg w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
              <Link to="/">
                <LogoTitle />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <>
                {/* Menu Links */}
                {isAdmin ? (
                  <AdminMenu />
                ) : isInstructor ? (
                  <InstructorMenu />
                ) : (
                  <StudentMenu />
                )}
              </>
            </nav>
          </div>
        </div>
        <div>
          <hr />
          <div>
            <Link to="/dashboard"></Link>
          </div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300 hover:text-black ${
                themeIcon ? "black-text" : ""
              } ${isActive ? "bg-lime-100 text-black" : "bg-transparent"}`
            }
            title={user?.displayName}
          >
            <FaHome className="w-5 h-5" />
            <span className="ml-4 font-medium">Go To Home</span>{" "}
            <span>
              <img
                className="object-cover w-6 h-6 mx-2 rounded-full"
                src={user?.photoURL}
                alt="avatar"
                referrerPolicy="no-referrer"
              />
            </span>
          </NavLink>
          <NavLink
            to="/instructors"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300 hover:text-black    ${
                themeIcon ? "black-text" : ""
              } ${isActive ? "bg-lime-100 text-black" : "bg-transparent"}`
            }
          >
            <FaChalkboardTeacher className="w-5 h-5" />
            <span className="mx-4 font-medium">Instructors</span>
          </NavLink>
          <NavLink
            to="/classes"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300 hover:text-black    ${
                themeIcon ? "black-text" : ""
              } ${isActive ? "bg-lime-100 text-black" : "bg-transparent"}`
            }
          >
            <FaBuromobelexperte className="w-5 h-5" />
            <span className="mx-4 font-medium">Classes</span>
          </NavLink>

          <button
            onClick={handleLogOut}
            className={`flex w-full items-center px-4 py-2 mt-5  hover:bg-gray-300 hover:text-black transition-colors duration-300 transform ${
              themeIcon ? "black-text" : ""
            }`}
          >
            <FaSignOutAlt />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
