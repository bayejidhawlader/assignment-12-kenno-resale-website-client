import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConformationDeletModal from "../../ConformationDeletModal/ConformationDeletModal";

const AllSeller = () => {
  // Deleting A Seller
  const [deletingSeller, setDeletingSeller] = useState(null);

  // Close Modal After Open The Modal
  const closeModal = () => {
    setDeletingSeller(null);
  };

  // Delete A User Using This Handle
  // const handleDeleteSeller = (users) => {
  //   console.log(users);
  // };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user/sellers");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/user/sellers/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successful");
          refetch();
        }
      });
  };

  const handleDeleteSeller = (sellers) => {
    fetch(`http://localhost:5000/user/sellers/${sellers._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
          refetch();
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial No:</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              {/* <th>Admin</th> */}
              <th>Delete Seller</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-secondary"
                    >
                      Make Admin
                    </button>
                  )}
                </td> */}
                <td>
                  <label
                    onClick={() => setDeletingSeller(user)}
                    htmlFor="conformation-delet-modal"
                    className="btn btn-sm btn-outline btn-secondary"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingSeller && (
        <ConformationDeletModal
          title={`Are you sure ?`}
          message={`Do you really want to delete (${deletingSeller.name})? This process cannot be undone`}
          successAction={handleDeleteSeller}
          successButtonName="Delete"
          modalData={deletingSeller}
          closeModal={closeModal}
        ></ConformationDeletModal>
      )}
    </div>
  );
};
export default AllSeller;
