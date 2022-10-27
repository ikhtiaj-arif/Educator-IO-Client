import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <div className="max-w-2xl h-screen px-6 py-16 mx-auto space-y-12">
        <div className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              These Are Our Terms And Conditions. 
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
              <div className="flex items-center md:space-x-2">
                <img
                  src="https://source.unsplash.com/75x75/?portrait"
                  alt=""
                  className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                />
                <p className="text-sm">MD.Ikhtiaj Arif • oct 27th, 2022</p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                4 min read • 1,570 views
              </p>
            </div>
          </div>
          <div className="dark:text-gray-100">
            <p>Insert the actual text content here...</p>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
            <Link
              rel="noopener noreferrer"
              to="/blogs"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
            >
              Blogs
            </Link>
            <Link
              rel="noopener noreferrer"
              to="/courses/0"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
            >
              Courses
            </Link>
            <Link
              rel="noopener noreferrer"
              to="/f-a-q"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
            >
              F A Q
            </Link>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Related posts</h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <p href="#" className="hover:underline">
                  Nunc id magna mollis
                </p>
              </li>
              <li>
                <p href="#" className="hover:underline">
                  Duis molestie, neque eget pretium lobortis
                </p>
              </li>
              <li>
                <p href="#" className="hover:underline">
                  Mauris nec urna volutpat, aliquam lectus sit amet
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Link to="/register">register</Link>
    </div>
  );
};

export default TermsAndConditions;
