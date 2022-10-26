import React from "react";
import {  useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogs = useLoaderData();
  
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {
            blogs.map(item => <BlogCard
                key={item.id}
                item={item}
            ></BlogCard>)
        }
        </div>
      </section>
    </div>
  );
};

export default Blogs;
