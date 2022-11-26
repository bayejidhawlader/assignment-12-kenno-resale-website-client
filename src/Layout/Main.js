import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Pages/Home/Banner/Banner";
import Footer from "../Pages/Home/Footer/Footer";
import Navbar from "../Pages/Home/Navbar/Navbar";

const Main = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
