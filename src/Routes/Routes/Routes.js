import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Layout/Main";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import DashBoardLayout from "../../Pages/Dashboard/Dashboard/DashBoardLayout";
import SingUp from "../../Pages/Login/SignUp";
import Blog from "../../Pages/Shared/Blog/Blog";
import CatagoryItem from "../../Pages/Categoey/CatagoryItem";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Admin from "../../Pages/Dashboard/Admin/Admin";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AllUsers from "../../Pages/Dashboard/Users/AllUsers";

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
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/user",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/myproduct",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/admin",
        element: <Admin></Admin>,
      },
    ],
  },
]);

export default router;
