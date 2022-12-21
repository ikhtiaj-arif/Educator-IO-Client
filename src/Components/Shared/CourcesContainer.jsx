
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
      
     <div className="mt-24 h-auto w-full lg:w-3/4  mx-auto">
        <h1 className="text-3xl  md:text-6xl font-bold text-center">Chose From <span className="text-accent">{courses.length} Cources</span></h1>
        <div className="mt-14 mx-auto lg:mx-0 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* make it a card container */}
          {courses.map((e) => (
            <div
              key={e.id}
              className="border mx-10 "
            >
              <NavLink to={`/courses/${e.id}`} className="p-3">
                {e.name}
              </NavLink>
            </div>
          ))}
        </div>
  

      </div>
  
    );
};

export default CourcesContainer;