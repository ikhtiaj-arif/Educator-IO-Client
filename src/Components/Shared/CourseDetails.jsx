import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { cover, coursesName, pricePer } = details;


  return (
    <div className="lg:w-3/4 mx-auto p-3">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button className="btn btn-outline btn-info" onClick={toPdf}>
            download PDF
          </button>
        )}
      </Pdf>

      <div ref={ref}>
        <div className="md:w-2/4 mx-auto">
          <img className="w-full" src={cover} alt="" />
          <div className="flex">
            <h1 className="text-3xl font-medium py-3">{coursesName}</h1>
            <h1 className="text-4xl font-medium py-3">{pricePer}</h1>
          </div>
        </div>

        <Link to="/checkout">
          <button className="btn btn-outline btn-error">Enroll Now</button>
        </Link>
      </div>
    </div>
  );
};



export default CourseDetails;
