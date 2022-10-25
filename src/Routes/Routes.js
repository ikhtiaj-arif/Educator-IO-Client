import Profile from "../Components/Private/Profile";
import Blogs from "../Components/Shared/Blogs";
import CourseDetails from "../Components/Shared/CourseDetails";
import Courses from "../Components/Shared/Courses";
import CoursesCategory from "../Components/Shared/CoursesCategory";
import Faq from "../Components/Shared/Faq";
import Login from "../Components/Shared/Login";
import Register from "../Components/Shared/Register";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Components/Home/Home");
const { default: Main } = require("../Layouts/Main");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                children: [
                    {
                        path: '/courses/:id',
                        element: <CoursesCategory></CoursesCategory>,
                        loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
                    }
                ]
              
            },
           
          
            {
                path: '/f-a-q',
                element: <Faq></Faq>
            },
            {
                path: '/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/courseDetails',
                element: <CourseDetails></CourseDetails>
            }
        ]
    }
])