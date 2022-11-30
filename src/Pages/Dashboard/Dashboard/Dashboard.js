import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useBuyer from "../../../hooks/useBuyer";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isBuyer] = useBuyer(user?.email);
  // const { user } = useContext(AuthContext);
  // const url = `https://server-vert-nu.vercel.app/bookings?email=${user?.email}`;

  // const { data: bookings = [] } = useQuery({
  //   queryKey: ["bookings"],
  //   queryFn: async () => {
  //     const res = await fetch(url, {
  //       headers: {
  //         authorization: `bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     });
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  //  {isBuyer && ()}
  return (
    <div>
      {/* <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div> */}

      {/* <h1 className="text-3xl text-bold my-6">My Order</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial NO:</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>location</th>
              <th>Number</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.length &&
              bookings.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.orderMobile}</td>
                  <td>{booking.price}</td>
                  <td>{booking.location}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.year}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Dashboard;
