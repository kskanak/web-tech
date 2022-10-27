import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../router/AuthProvider";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const handleMode = (e) => {
    setActive(!active);
  };
  const handleSignout = () => {
    handleLogout()
      .then((result) => {
        toast.info("Sign out successfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-gray-900 text-white px-10 md:px-16">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "text-info" : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/curriculam"
                  className={({ isActive }) =>
                    isActive ? "text-info" : undefined
                  }
                >
                  Curriculam
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    isActive ? "text-info" : undefined
                  }
                >
                  Faq
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-info" : undefined
                  }
                >
                  Blog
                </NavLink>
              </li>
              <div className="light-dark-mode">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="toggle toggle-accent"
                      onClick={handleMode}
                    />
                    <span className="label-text  text-white ml-2 ">
                      {active ? "Dark " : "Light "}
                    </span>
                  </label>
                </div>
              </div>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-lg md:text-xl">
            <img src={logo} alt="Tech-web" className="h-8 md:h-10 mr-2" /> Tech
            Web
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "text-success" : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/curriculam"
                className={({ isActive }) =>
                  isActive ? "text-success" : undefined
                }
              >
                Curriculam
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "text-success" : undefined
                }
              >
                Faq
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-success" : undefined
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="light-dark-mode hidden md:block">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="toggle toggle-accent"
                onClick={handleMode}
              />
              <span className="label-text  text-white ml-2 ">
                {active ? "Dark " : "Light "}
              </span>
            </label>
          </div>
        </div>
        <div className="navbar-end flex">
          <div className="userInfo text-white">
            {user ? (
              <img
                src={user.photoURL}
                title={user.displayName}
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <FaUser />
            )}
          </div>
          {user && user?.uid ? (
            <button
              className="btn btn-outline btn-accent btn-sm mx-2"
              onClick={handleSignout}
            >
              LogOut
            </button>
          ) : (
            <div className="login-regis-btn">
              <Link to="/login">
                <button className="btn btn-outline btn-accent btn-sm ml-3">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
