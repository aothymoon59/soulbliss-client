import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { GiNotebook } from "react-icons/gi";

import { FaCheckSquare } from "react-icons/fa";

const StudentMenu = () => {
  const { themeIcon } = useAuth();
  return (
    <>
      <NavLink
        to="selectedClass"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300 hover:text-black   ${
            themeIcon ? "black-text" : ""
          } ${isActive ? "bg-lime-100 text-black" : "bg-transparent"}`
        }
      >
        <FaCheckSquare className="w-5 h-5" />
        <span className="mx-4 font-medium">My Selected Classes</span>
      </NavLink>
      <NavLink
        to="enrolledClass"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300 hover:text-black   ${
            themeIcon ? "black-text" : ""
          } ${isActive ? "bg-lime-100 text-black" : "bg-transparent"}`
        }
      >
        <GiNotebook className="w-5 h-5" />
        <span className="mx-4 font-medium">My Enrolled Classes</span>
      </NavLink>
    </>
  );
};

export default StudentMenu;
