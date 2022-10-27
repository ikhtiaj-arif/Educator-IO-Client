import React from "react";
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
    <section className="dark:bg-gray-800 dark:text-gray-100 h-screen">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">A Perfect 
				<span className="dark:text-violet-400">Place To Start</span>Your Journey!
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Learn Different Topics Form The Best Teacher's.
				
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link rel="noopener noreferrer" to='/register' className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 hover:text-violet-400 hover:bg-gray-800 hover:border" >Register Now</Link>
				<Link rel="noopener noreferrer" to='/courses/0' className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:bg-violet-400">See The Courses</Link>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
    </>
  );
};

export default Home;
