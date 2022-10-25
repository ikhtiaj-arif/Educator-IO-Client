import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaAlignLeft } from 'react-icons/fa';
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const {user, logOutUser} = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () => {
      logOutUser()
      .then( ()=>{})
      .catch(e => console.log(e))
    }

  return (
    <div className="navbar bg-base-100 lg:w-3/4 mx-auto">
      <div className="navbar-start relative">

      <label onClick={()=>setOpen(!open)}  className="btn btn-ghost text-xl md:hidden ">
        {open ? 
        <HiOutlineXMark/>
        : <FaAlignLeft/> }
      
      </label>
      


        <Link className="btn btn-ghost normal-case text-xl">EducatorIO</Link>
      </div>
      <div className="navbar-center">
        <ul className={`md:flex py-8 md:py-0 bg-gray-200 md:bg-base-100  font-semibold absolute md:static left-0 md:pl-0 pl-9 w-full md:w-auto transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-600px]'}`}>
          <li className='p-3 '>
            <Link to="/">Home</Link>
          </li>
          <li className='p-3 '>
            <Link to="/courses">Courses</Link>
          </li>
          <li className='p-3 '>
            <Link to="/f-a-q">F A Q</Link>
          </li>
          <li className='p-3 '>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div>
        <Link>
        {
          user && user.uid ? <>
          <button className="btn btn-outline btn-secondary" onClick={handleLogOut}>Logout</button>
          {user.email} 
          </>
          :<FaUserTie/>

        }
         
        </Link>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">light dark</span>
            <input type="checkbox" className="toggle toggle-accent"  />
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
