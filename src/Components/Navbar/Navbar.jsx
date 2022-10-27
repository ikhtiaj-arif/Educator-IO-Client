import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { FaUserTie, FaAlignLeft } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(false);
  // context data to get user data
  const { user, logOutUser } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((e) => console.log(e));
  };

  return (
    <div className="navbar py-5 lg:w-3/4 mx-auto">
      <div className="navbar-start relative">
        {/* conditional check for responsive toggle button */}
        <label
          onClick={() => setOpen(!open)}
          className="btn btn-ghost text-xl md:hidden "
        >
          {open ? <HiOutlineXMark /> : <FaAlignLeft />}
        </label>

        <Link
          to="/"
          className="flex items-center normal-case text-3xl text-white font-serif"
        >
          <img className="w-8 rounded-full" src={logo} alt="" />
          EducatorIO
        </Link>
      </div>
      <div className="navbar-center">
        <ul
          className={`md:flex py-8 md:py-0 bg-gray-200 md:bg-base-100 text-gray-600 text-lg md:text-gray-100 font-semibold absolute md:static left-0 md:pl-0 pl-9 w-full md:w-auto transition-all duration-500 ease-in z-10  ${
            open ? "top-16" : "top-[-600px]"
          }`}
        >
          <li className="p-3 ">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 ">
            <NavLink to="/courses/0">Courses</NavLink>
          </li>
          <li className="p-3 ">
            <NavLink to="/f-a-q">F A Q</NavLink>
          </li>
          <li className="p-3 ">
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div>
          <Link to="/profile">
            {/* conditional check user to get user data */}
            <>
              {user && user.uid ? (
                <div className="flex items-center ">
                  {user.photoURL ? (
                    <div className="relative">
                      <img
                        className="w-10 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                      <div className="absolute text-white top-0 left-0 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                        {user.displayName}
                      </div>
                    </div>
                  ) : (
                    <FaUserTie className="w-10 text-xl rounded-full"></FaUserTie>
                  )}
                  <button
                    className="btn btn-outline btn-secondary mx-2"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button className="btn btn-outline btn-secondary mx-2 ">
                  Login
                </button>
              )}
            </>
          </Link>
        </div>
        {/* dark mode toggle button */}
        <div className="">
          <button
            className="p-2 cursor-pointer"
            onClick={() => setTheme(!theme)}
          >
            {theme ? (
              <FaSun className="text-2xl text-orange-400"></FaSun>
            ) : (
              <FaMoon className="text-2xl text-cyan-700"></FaMoon>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
