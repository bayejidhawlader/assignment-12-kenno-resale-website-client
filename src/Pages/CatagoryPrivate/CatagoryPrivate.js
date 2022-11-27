import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const PrivateCatagory = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default PrivateCatagory;
