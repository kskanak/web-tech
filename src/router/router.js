import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CheckoutPages from "../components/Courses/CheckoutPages";
import CourseDetails from "../components/Courses/CourseDetails";
import Courses from "../components/Courses/Courses";
import Premiumdetails from "../components/Courses/Premiumdetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq1 from "../components/Faq1/Faq1";

import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },

      {
        path: "/curriculam",
        loader: () =>
          fetch("https://web-tech-server-side.vercel.app/catagories"), //    http://localhost:5000/catagories
        element: <Courses></Courses>,
      },
      {
        path: "/faq",
        element: <Faq1></Faq1>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkOutPage/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://web-tech-server-side.vercel.app/catagorydetails/${params.id}` ///2   http://localhost:5000/catagorydetails/${params.id}
          );
        },
        element: (
          <PrivateRoutes>
            <CheckoutPages></CheckoutPages>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
