import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const [active, setActive] = useState(false);
  const handleMode = (e) => {
    setActive(!active);
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
                    isActive ? "text-red-700" : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/curriculam"
                  className={({ isActive }) =>
                    isActive ? "text-red-700" : undefined
                  }
                >
                  Curriculam
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    isActive ? "text-red-700" : undefined
                  }
                >
                  FAQ
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-red-700" : undefined
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="Tech-web" className="h-10 mr-2" /> Tech Web
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "text-red-700" : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/curriculam"
                className={({ isActive }) =>
                  isActive ? "text-red-700" : undefined
                }
              >
                Curriculam
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "text-red-700" : undefined
                }
              >
                FAQ
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-red-700" : undefined
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
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
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-outline btn-accent btn-sm">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
