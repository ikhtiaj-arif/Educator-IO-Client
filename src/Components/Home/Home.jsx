import React from "react";
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="lg:w-3/4">
      <h1 className="mb-5 text-5xl font-bold">Get The Best Free Online Courses</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to='/register'><button className="btn btn-primary">Register Now</button></Link>
    </div>
  </div>
</div>
    </>
  );
};

export default Home;
