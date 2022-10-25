import Blogs from "../Components/Shared/Blogs";
import Courses from "../Components/Shared/Courses";
import Faq from "../Components/Shared/Faq";

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
                element: <Courses></Courses>
            },
            {
                path: '/f-a-q',
                element: <Faq></Faq>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    }
])