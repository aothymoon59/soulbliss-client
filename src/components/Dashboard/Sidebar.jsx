import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";

import LogoTitle from "../LogoTitle/LogoTitle";
import AdminMenu from "./AdminMenu";
import InstructorMenu from "./InstructorMenu";
import StudentMenu from "./StudentMenu";
import useAuth from "../../hooks/useAuth";
const Sidebar = () => {
  const [isActive, setActive] = useState("false");
  const { themeIcon } = useAuth();
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

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
                <AdminMenu />
                <InstructorMenu />
                <StudentMenu />
              </>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
