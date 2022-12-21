import React from "react";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import ActionBtn2 from "../Buttons/ActionBtn2";
import { FaBeer } from 'react-icons/fa';
import ActionBtn from "../Buttons/ActionBtn";

const Profile = () => {
  const { user, setLoading, updateUserProfile, updateUserPassword } =
    useContext(AuthContext);
  const { displayName,  email, photoURL, emailVerified } = user;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;

    const profile = { displayName: name, photoURL: photo };
    updateUserProfile(profile)
    .then(() => {
      toast.success("Profile Successfully Updated ! ");
      form.reset()
    })
    .catch((e) => toast.error(e.message))
    .finally( () => {
      setLoading(false)
    })
   
   
  };


  const handleReset = (email) => {
    updateUserPassword(email)
    .then( ()=>{
      toast.success('Password Reset Link Sent To Your Email !')
    })
    .catch(e => toast.error(e.message))
   
  }


  return (
    <div className="md:w-3/4 mx-auto">
      <div className=" h-screen p-8 sm:flex justify-center sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-96 sm:w-96 sm:mb-0">
          <img
            src={photoURL}
            alt=""
            className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{displayName}</h2>
            {emailVerified ? (
              <span className="text-sm dark:text-green-400">Verified User</span>
            ) : (
              <span className="text-sm dark:text-red-400">
                {" "}
                User Not Verified
              </span>
            )}
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Email address"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                ></path>
              </svg>
              <span className="dark:text-gray-400">{email}</span>
            </span>
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Phonenumber"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                ></path>
              </svg>
              <span className="dark:text-gray-400">+25 381 77 983</span>
            </span>
          </div>
          <div className="">
            <h2 className="my-3 text-2xl ">Update Your Profile</h2>
            <form onSubmit={handleUpdate} action="">
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  placeholder="Set Name"
                  className="block w-full p-3  rounded-md shadow-sm text-gray-700"
                  required
                />
              </div>

              <div className="mt-4">
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Set New Photo URL"
                    className="block w-full p-3  rounded-md shadow-sm text-gray-700"
                    required
                  />
                </div>
              </div>

             
              <ActionBtn2
                type="submit"
                title=" Update"
                icon=  '<FaBeer/>'
              >
             
              </ActionBtn2>
              <ActionBtn
              onClick={()=>handleReset(email)}
                type="button"
                title="Reset Password With Email"
              >
                
              </ActionBtn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
