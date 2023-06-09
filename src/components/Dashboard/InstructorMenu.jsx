import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaBook, FaFileUpload } from "react-icons/fa";

const InstructorMenu = () => {
  const { themeIcon } = useAuth();
  return (
    <>
      <NavLink
        to="addClass"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300 hover:text-black    ${
            themeIcon ? "black-text" : ""
          } ${isActive ? "bg-lime-100 text-black" : "bg-transparent"}`
        }
      >
        <FaFileUpload className="w-5 h-5" />
        <span className="mx-4 font-medium">Add A Class</span>
      </NavLink>
      <NavLink
        to="myClass"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300 hover:text-black    ${
            themeIcon ? "black-text" : ""
          } ${isActive ? "bg-lime-100 text-black" : "bg-transparent"}`
        }
      >
        <FaBook className="w-5 h-5" />
        <span className="mx-4 font-medium">My Classes</span>
      </NavLink>
    </>
  );
};

export default InstructorMenu;
