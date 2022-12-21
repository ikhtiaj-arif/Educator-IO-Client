import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const CourcesContainer = () => {
  const [courses, setCourses] = useState([]);
  // directly fetch data
  useEffect(() => {
    fetch("https://assignment-10-server-gamma.vercel.app/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div id="courses" className="mt-24 h-auto w-full lg:w-3/4  mx-auto">
      <h1 className="text-3xl  md:text-6xl font-bold text-center">
        Chose From <span className="text-accent">{courses.length} Cources</span>
      </h1>
      <div className="mt-14 mx-auto lg:mx-0 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* make it a card container */}
        {courses.map((e) => (
          <div key={e.id} className=" mx-10 ">
            <NavLink to={`/courses/${e.id}`} className="p-3">
          
              <div className=" p-6 rounded-md bg-[#00000027] shadow-[#4012596f] shadow-lg dark:text-gray-50">
                <img
                  src="https://source.unsplash.com/random/300x300/?1"
                  alt=""
                  className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
                <div className="mt-6 mb-2">
              
                  <h2 className="text-xl font-semibold tracking-wide">
                  {e.name}
                  </h2>
                </div>
              
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourcesContainer;
