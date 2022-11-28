import React, { useState, useEffect } from "react";

const AllUsers = () => {
  const [allUsers, setAllUser] = useState([]);
  console.log(allUsers);
  //  load all user data

  useEffect(() => {
    fetch("http://localhost:5000/alluser")
      .then((res) => res.json())
      .then((data) => {
        setAllUser(data);
      });
  }, []);

  return (
    <div>
      <h1>length:{allUsers.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial No:</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
