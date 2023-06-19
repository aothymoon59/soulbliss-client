import { Link, NavLink } from "react-router-dom";
import Container from "../../../components/Container/Container";
import LogoTitle from "../../../components/LogoTitle/LogoTitle";
import useAuth from "../../../hooks/useAuth";
import { FaMoon, FaSignOutAlt, FaSun } from "react-icons/fa";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const Navbar = () => {
  const { user, logOut, themeIcon, handleToggleTheme } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          title="Home"
          className={({ isActive }) =>
            `px-3 transition-colors duration-300 transform hover:bg-gray-300   ${
              themeIcon ? "black-text" : ""
            } ${isActive ? "bg-lime-100 black-text" : "bg-transparent"}`
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
            `px-3 transition-colors duration-300 transform hover:bg-gray-300   ${
              themeIcon ? "black-text" : ""
            } ${isActive ? "bg-lime-100 text-black" : "bg-transparent"}`
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
            `px-3 transition-colors duration-300 transform hover:bg-gray-300   ${
              themeIcon ? "black-text" : ""
            } ${isActive ? "bg-lime-100 text-black" : "bg-transparent"}`
          }
        >
          <span className=" lg:text-lg font-medium">Classes</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          title="About"
          className={({ isActive }) =>
            `px-3 transition-colors duration-300 transform hover:bg-gray-300   ${
              themeIcon ? "black-text" : ""
            } ${isActive ? "bg-lime-100 text-black" : "bg-transparent"}`
          }
        >
          <span className=" lg:text-lg font-medium">About</span>
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={
              isAdmin
                ? "/dashboard/manageClass"
                : isInstructor
                ? "/dashboard/addClass"
                : "/dashboard/selectedClass"
            }
            title="Dashboard"
            className={({ isActive }) =>
              `px-3 transition-colors duration-300 transform hover:bg-gray-300   ${
                themeIcon ? "black-text" : ""
              } ${isActive ? "bg-lime-100 text-black" : "bg-transparent"}`
            }
          >
            <span className=" lg:text-lg font-medium">Dashboard</span>
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div
      className={`w-full z-50 shadow-sm ${
        themeIcon ? "my-bg black-text" : "dark-bg white-text"
      }`}
    >
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
                className="menu menu-sm z-50 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase"
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
            <div>
              <button
                className="w-7 h-7 sm:w-10 sm:h-10 text-lg flex justify-center items-center"
                onClick={handleToggleTheme}
                title={themeIcon ? "Dark" : "Light"}
              >
                {themeIcon ? <FaMoon /> : <FaSun />}
              </button>
            </div>
            {user ? (
              <div
                className="tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar z-50"
                  >
                    <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full border">
                      <img
                        src={user?.photoURL}
                        alt={user?.displayName}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact bg-[#13795B] dropdown-content mt-3 p-2 z-50 text-white shadow font-medium rounded-box w-52"
                  >
                    <li>
                      <Link onClick={handleLogOut}>
                        Logout <FaSignOutAlt />
                      </Link>
                    </li>
                    <li>
                      <Link className="justify-between">Profile</Link>
                    </li>
                    <li>
                      <Link>Settings</Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="my-btn hover:bg-transparent hover:text-[#13795B] transition-all duration-200 ease-linear"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
