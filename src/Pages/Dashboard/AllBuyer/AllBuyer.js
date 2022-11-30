import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConformationDeletModal from "../ConformationDeletModal/ConformationDeletModal";

const AllBuyer = () => {
  // Deleting A Buyer
  const [deletingBuyer, setDeletingBuyer] = useState(null);

  // Close Modal After Open The Modal
  const closeModal = () => {
    setDeletingBuyer(null);
  };

  // Delete A User Using This Handle

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user/buyers");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteBuyer = (buyers) => {
    fetch(`http://localhost:5000/user/buyers/${buyers._id}`, {
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
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              {/* <th>Admin</th> */}
              <th>Delete Buyer</th>
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
                    onClick={() => setDeletingBuyer(user)}
                    htmlFor="conformation-delet-modal"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingBuyer && (
        <ConformationDeletModal
          title={`Are you sure ?`}
          message={`Do you really want to delete (${deletingBuyer.name})? This process cannot be undone`}
          successAction={handleDeleteBuyer}
          successButtonName="Delete"
          modalData={deletingBuyer}
          closeModal={closeModal}
        ></ConformationDeletModal>
      )}
    </div>
  );
};

export default AllBuyer;
