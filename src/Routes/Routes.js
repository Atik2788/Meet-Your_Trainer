import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import ReviewService from "../Pages/ReviewService/ReviewService";
import PrivateRouter from "../PrivetRouter/PrivateRouter";
import Home from "../Sheared/Home/Home";
import Login from "../Sheared/Login/Login";
import Main from "../Sheared/Main/Main";
import NotFound from "../Sheared/NotFound/NotFound";
import Signup from "../Sheared/Signup/Signup";
import ReviewSingle from "../Pages/ReviewSingle/ReviewSingle";
import MyReview from "../Pages/MyReview/MyReview";
import EditReview from "../Pages/MyReview/EditReview";

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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/addservice",
        element: <PrivateRouter><AddService></AddService></PrivateRouter>,
      },
      {
        path: "/services/:id",
        element: <ReviewService></ReviewService>,
        loader: ({ params }) =>
          fetch(
            `https://meet-your-trainer-server-atik2788.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/myreviews",
        element: <PrivateRouter><MyReview></MyReview></PrivateRouter>,
      },
      {
        path: "/reviews",
        element: <ReviewSingle></ReviewSingle>,
      },
      {
        path: "/reviews/:id",
        element: <EditReview></EditReview>,
        loader: ({params}) => fetch(`https://meet-your-trainer-server-atik2788.vercel.app/service/${params.id}`),
      }

    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
