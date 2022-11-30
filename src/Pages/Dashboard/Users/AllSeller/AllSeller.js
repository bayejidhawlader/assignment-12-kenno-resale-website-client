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

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user/sellers");
      const data = await res.json();
      return data;
    },
  });

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
