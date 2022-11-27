import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";

const DashBoardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My orders</Link>
            </li>
            <li>
              <Link to="/dashboard/seller">All sellers</Link>
            </li>
            <li>
              <Link to="/dashboard/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
