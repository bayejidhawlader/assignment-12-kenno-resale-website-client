import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";

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
          <ul className="menu p-4 w-80  text-base-content">
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/myproduct">My Products</Link>
            </li>
            <li>
              <Link to="/dashboard/user">All Users</Link>
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