import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useBuyer from "../../../hooks/useBuyer";
import useSeller from "../../../hooks/useSeller";
import Navbar from "../../Home/Navbar/Navbar";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  // console.log(isSeller);
  const [isBuyer] = useBuyer(user?.email);
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
            {isBuyer && (
              <>
                <li>
                  <Link to="/dashboard/myorder">My Orders</Link>
                </li>
                {/* <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li> */}
              </>
            )}

            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/myproduct">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/product">Add Products</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/seller">All Seller</Link>
                </li>
                <li>
                  <Link to="/dashboard/buyer">All Buyer</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
