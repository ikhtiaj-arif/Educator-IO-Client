import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaAlignLeft } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((e) => console.log(e));
  };

  return (
    <div className="navbar lg:w-3/4 mx-auto">
      <div className="navbar-start relative">
        <label
          onClick={() => setOpen(!open)}
          className="btn btn-ghost text-xl md:hidden "
        >
          {open ? <HiOutlineXMark /> : <FaAlignLeft />}
        </label>

        <Link to="/" className=" normal-case text-2xl text-white font-serif">
          EducatorIO
        </Link>
      </div>
      <div className="navbar-center">
        <ul
          className={`md:flex py-8 md:py-0 bg-gray-200 md:bg-base-100 text-gray-600 md:text-gray-100 font-semibold absolute md:static left-0 md:pl-0 pl-9 w-full md:w-auto transition-all duration-500 ease-in z-10  ${
            open ? "top-16" : "top-[-600px]"
          }`}
        >
          <li className="p-3 ">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 ">
            <Link to="/courses/0">Courses</Link>
          </li>
          <li className="p-3 ">
            <Link to="/f-a-q">F A Q</Link>
          </li>
          <li className="p-3 ">
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div>
          <Link to="/profile">
            <>
              {user && user.uid ? (
                <div className="flex items-center ">
                  {user.photoURL ? (
                    <img
                      className="w-10 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
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

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text"></span>
            <input type="checkbox" className="toggle toggle-accent" />
          </label>
        </div>
      </div>
    </div>

    // <nav className='flex justify-between md:w-3/4 mx-auto'>
    //     <Link to='/'>
    //     <h2>Title and Logo</h2>
    //     </Link>

    //     <div>
    //         <Link to='/blogs'>Home</Link>
    //         <Link to='/blogs'>Courses</Link>
    //         <Link to='/blogs'>Blogs</Link>
    //         <Link to='/blogs'>FAQ</Link>
    //     </div>
    // </nav>
  );
};

export default Navbar;
