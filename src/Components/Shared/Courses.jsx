
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  Link } from "react-router-dom";

const Courses = () => {
 const [courses, setCourses] = useState([])

useEffect( ()=>{
    fetch('http://localhost:5000/all-courses')
    .then(res => res.json())
    .then(data => setCourses(data))
},[])


  return (
    <div className="h-screen w-full lg:w-3/4 md:grid grid-cols-2 mx-auto">
      <ul className="p-6">
        {
        
        courses.map((e) => (
          <li className="p-2 font-semibold">
            <Link to={`/all-courses/${e.id}`} className="p-3">{e.name}</Link>
          </li>
        ))}
      </ul>
      <div className="bg-gray-200">description</div>
    </div>
  );
};

export default Courses;
