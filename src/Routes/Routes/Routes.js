import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Layout/Main";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SingleCategory from "../../Pages/Home/CategoryHome/SingleCategory/SingleCategory";
import Appoinment from "../../Pages/Shared/Appoinment/Appoinment";
import SingUp from "../../Pages/Login/SingUp";
import Blog from "../../Pages/Shared/Blog/Blog";
import SingleOppoCategory from "../../Pages/Home/OppoCategory/SingleOppoCategory/SingleOppoCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appoinment",
        element: <Appoinment></Appoinment>,
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
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/category/:id",
        element: <SingleCategory></SingleCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/homeCategory/${params.id}`),
      },
      {
        path: "/oppo_category/:id",
        element: <SingleOppoCategory></SingleOppoCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/oppoCategory/${params.id}`),
      },
    ],
  },
]);

export default router;
