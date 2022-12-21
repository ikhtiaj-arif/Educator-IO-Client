import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import ActionBtn from "../Buttons/ActionBtn";

const CoursesCategory = () => {
  const topics = useLoaderData();
  console.log(topics);
  // const {_id, cover, coursesName} = topics;

  return (
    <div className="md:grid grid-cols-2 gap-5">
      {topics.map((e) => (
        <div key={e._id} className="card m-4 bg-gray-700 shadow-xl ">
          
            <img src={e.cover} alt="" className="h-56 w-full" />
          <div className="card-body w-full">
            <h2 className="card-title text-cyan-100 text-3xl">{e.coursesName}</h2>
            {/* <p className="text-gray-200 p-3">{e.description.slice(0, 180)}....</p> */}
            <div className="flex items-center justify-between text-center mb-2">
             <p>Rating:  <span className="text-yellow-400">{e.rating.rate} </span></p>
             <p>Total Students:  {e.rating.count}</p>
              
            </div>
            <Link className="w-full mb-0 " to={`/courseDetails/${e._id}`} >
                <ActionBtn title="Learn More"></ActionBtn>
              </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesCategory;
