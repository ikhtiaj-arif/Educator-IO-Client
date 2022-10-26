
import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const details = useLoaderData();
  const {
    cover,
    coursesName,
    description,
    points,
    courTeacher

  } = details;
 
  return (
    <div>
       
      <section className="dark:bg-gray-800 md:w-3/4 mx-auto dark:text-gray-100">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
          
            <h2 className="flex justify-center text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-14 mr-2 mb-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
			</svg>
             Congratulations !
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-center dark:text-gray-400">
              You Got The Premium Access To : 
            </p>
            <p className="max-w-3xl mx-auto text-4xl font-semibold mt-2 text-center dark:text-gray-200">{coursesName}</p>
                <p className="text-center mt-3 text-gray-400">Author: {courTeacher[0].name}</p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                Ad vix debet docendi
              </h3>
              <p className="mt-3 text-lg dark:text-gray-400">
               {description}
              </p>
              <div className="mt-12 space-y-12">
                {points.map((item, idx) => <div 
                key={idx}
                className="flex">
                  <div  className="flex-shrink-0">
                    <div className="flex items-center justify-center w-6 h-6 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                     {item}
                    </h4>
                  </div>
                </div>)}
                
          
               
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={cover}
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Checkout;
