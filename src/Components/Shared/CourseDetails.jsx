import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';


const CourseDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const {cover, coursesName, pricePer} = details;
    return (
        <div className='lg:w-3/4 mx-auto p-3'>
            <button className="btn btn-outline btn-info">download PDF</button>

            <div className='md:w-3/4 mx-auto'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex'>
            <h1 className='text-3xl font-medium py-3'>{coursesName}</h1>
            <h1 className='text-4xl font-medium py-3'>{pricePer}</h1>
            </div>

            </div>
            
            <Link to='/checkout'>
            <button className="btn btn-outline btn-error">Enroll Now</button>
            </Link>
        </div>
    );
};

export default CourseDetails;