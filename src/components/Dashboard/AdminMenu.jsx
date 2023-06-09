import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaBookOpen, FaUsers } from "react-icons/fa";

const AdminMenu = () => {
  const { themeIcon } = useAuth();
  return (
    <>
      <NavLink
        to="manageClass"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300  hover:text-gray-700 ${
            themeIcon ? "black-text" : "white-text"
          } ${isActive ? "bg-lime-100 text-black" : "bg-transparent"}`
        }
      >
        <FaBookOpen className="w-5 h-5" />
        <span className="mx-4 font-medium">Manage Classes</span>
      </NavLink>
      <NavLink
        to="manageUsers"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300  hover:text-gray-700 ${
            themeIcon ? "black-text" : "white-text"
          } ${isActive ? "bg-lime-100 text-black" : "bg-transparent"}`
        }
      >
        <FaUsers className="w-5 h-5" />
        <span className="mx-4 font-medium">Manage Users</span>
      </NavLink>
    </>
  );
};

export default AdminMenu;
