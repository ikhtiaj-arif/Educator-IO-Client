import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  // directly fetch data
  useEffect(() => {
    fetch("https://assignment-10-server-gamma.vercel.app/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="h-screen w-full lg:w-3/4 md:flex mx-auto">
      {/* <h1>Chose From {courses.length} Cources</h1> */}
      <ul className="p-6">
        {/* make it a card container */}
        {courses.map((e) => (
          <li
            key={e.id}
            className="p-2 font-semibold text-cyan-50 text-lg  hover:text-secondary"
          >
            <NavLink to={`/courses/${e.id}`} className="p-3">
              {e.name}
            </NavLink>
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
