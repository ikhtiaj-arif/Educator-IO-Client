import React from 'react';
import { useLoaderData } from 'react-router-dom';



const CoursesCategory = () => {
    const topics = useLoaderData()
    return (
        <div className='bg-gray-300'>
            <h2>total : {topics.length}</h2>
        </div>
    );
};

export default CoursesCategory;