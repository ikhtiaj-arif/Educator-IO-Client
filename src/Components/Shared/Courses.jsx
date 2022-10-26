
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  Link, Outlet} from "react-router-dom";
import CoursesCategory from "./CoursesCategory";


const Courses = () => {
 const [courses, setCourses] = useState([])

useEffect( ()=>{
    fetch('http://localhost:5000/')
    .then(res => res.json())
    .then(data => setCourses(data))
},[])


  return (
    <div className="h-screen w-full lg:w-3/4 md:flex mx-auto">

      <ul className="p-6">
        {
        
        courses.map((e) => (
          <li
          key={e.id}
          className="p-2 font-semibold">
            <Link to={`/courses/${e.id}`} className="p-3">{e.name}</Link>
          </li>
        ))}
      </ul>


      <div className="md:w-3/4 mx-auto overflow-y-auto">
        <Outlet></Outlet>
        
    </div>
    </div>
  );
};

export default Courses;
