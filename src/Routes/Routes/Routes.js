import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Layout/Main";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import DashBoardLayout from "../../Pages/Dashboard/DashBoardLayout";
import SingUp from "../../Pages/Login/SingUp";
import Blog from "../../Pages/Shared/Blog/Blog";
import CatagoryItem from "../../Pages/Categoey/CatagoryItem";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AllSellers from "../../Pages/Users/AllSellers";
import Admin from "../../Pages/Admin/Admin";

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
        element: <CatagoryItem></CatagoryItem>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/seller",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/admin",
        element: <Admin></Admin>,
      },
    ],
  },
]);

export default router;
