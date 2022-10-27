import Checkout from "../Components/Private/Checkout";
import Profile from "../Components/Private/Profile";
import Blogs from "../Components/Shared/Blogs";
import CourseDetails from "../Components/Shared/CourseDetails";
import Courses from "../Components/Shared/Courses";
import CoursesCategory from "../Components/Shared/CoursesCategory";
import Faq from "../Components/Shared/Faq";
import Login from "../Components/Shared/Login";
import PageNotFound from "../Components/Shared/PageNotFound";
import Register from "../Components/Shared/Register";
import TermsAndConditions from "../Components/Shared/TermsAndConditions";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Components/Home/Home");
const { default: Main } = require("../Layouts/Main");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <PageNotFound></PageNotFound> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        children: [
          {
            path: "/courses/:id",
            element: <CoursesCategory></CoursesCategory>,
            loader: ({ params }) =>
              fetch(
                `https://assignment-10-server-gamma.vercel.app/${params.id}`
              ),
          },
        ],
      },
      {
        path: "/f-a-q",
        element: <Faq></Faq>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () =>
          fetch("https://assignment-10-server-gamma.vercel.app/blogs/allblogs"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/courseDetails/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-gamma.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-gamma.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  }

]);
