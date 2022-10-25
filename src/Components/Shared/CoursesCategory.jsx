import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const CoursesCategory = () => {
  const topics = useLoaderData();
  console.log(topics);


  return (
    <div className="md:grid grid-cols-2 gap-5">
   
      {topics.map((e) => (
        <div className="card m-4 bg-base-100 shadow-xl">
        <figure>
          <img src={e.cover} alt="" />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title">{e.coursesName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link to='/courseDetails'>
            <button className="btn btn-primary">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      ))}

      
    </div>
  );
};

export default CoursesCategory;
