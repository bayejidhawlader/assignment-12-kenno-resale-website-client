import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const url = `https://server-vert-nu.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl text-bold my-6">My Order</h1>
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
            {bookings.map((booking, i) => (
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
      </div>
    </div>
  );
};

export default Dashboard;
