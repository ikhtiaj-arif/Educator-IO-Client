
import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Pdf from "react-to-pdf";
import { FaRegHandPointRight, FaCartPlus } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import ActionBtn from "../Buttons/ActionBtn";
import ActionBtn2 from "../Buttons/ActionBtn2";

const ref = React.createRef();

const CourseDetails = () => {
  const {user} = useContext(AuthContext)
  const details = useLoaderData();
  
  const {

    cover,
    _id,
    coursesName,
    pricePer,
    priceAll,
    rating,
    description,
    points,

  } = details;

  const notify =()=> { 
  if(user && user.uid) {
    toast.success('Congratulations ! Premium Access Granted!')
  }else{
    toast.error('You Must Sign In To Get Premium Access!')
  }
  }

  return (
    <div className="lg:w-3/4 h-screen mx-auto p-3">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <div className="w-56" onClick={toPdf}>
            <ActionBtn title='download PDF'/>
          </div>
        )}
      </Pdf>

      <div ref={ref}>
        <div className="md:w-3/4 mx-auto shadow-2xl p-3">
          <h1 className="text-3xl md:text-5xl font-medium py-3">
            {coursesName}
          </h1>
          <div className="my-6">
          <h1 className="text-2xl text-secondary ">What You Will Learn :</h1>
          <p className="text-gray-300">{description}</p>
          </div>

          <div className="md:flex justify-around py-4">
            <img className="w-3/4 md:w-2/4" src={cover} alt="" />
            <ul>
                <p  className="text-2xl text-secondary ">All The Topics : </p>
              {points.map((e, idx) => (
                <li key={idx} className="flex items-center text-gray-200 pt-1"> <FaRegHandPointRight className="text-accent mr-2"></FaRegHandPointRight> {e}</li>
              ))}
            </ul>
          </div>
          <div className="w-3/4 md:w-2/4 mb-3 flex items-center justify-between">
            <p className="text-sm text-gray-400 font-medium">
             
              <span className="text-4xl text-yellow-200 font-medium py-3">{pricePer}</span>/ month
            </p>
            <p  className="text-sm text-gray-400 font-medium">
            
              <span className="text-4xl text-yellow-200 font-medium py-3">{priceAll}</span>/ Total
            </p>
          </div>

       
       

          <div className="md:flex justify-between items-center mb-2">
            <p className="text-lg text-white mb-2">Rating : {rating.rate}/5</p>
            <p className="text-lg text-white mb-2">Students : {rating.count}</p>
            <Link to={`/checkout/${_id}`}>
            
           
            <ActionBtn2 onClick={()=>notify()} title={`Enroll Premium Now`}/>
            
          </Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
