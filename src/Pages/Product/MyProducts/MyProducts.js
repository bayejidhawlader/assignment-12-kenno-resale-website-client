import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ProductDelete from "../DeleteProduct/DeleteProduct";

const MyProduct = () => {
  const [productDelete, setproductDelete] = useState(null);

  const { data: products, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/products", {
          headers: {
            "content-type": "application/json",
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  const proDelete = (product) => {
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Location</th>
            <th>Number</th>
            <th>Description</th>
            <th>Advertise</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, i) => (
            <tr key={product._id}>
              <th>{i + 1}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.location}</td>
              <td>{product.number}</td>
              <td>{product.description}</td>
              <td>
                <button className="btn btn-primary">Advertise</button>
              </td>
              <td>
                <label
                  htmlFor="deleteModal"
                  onClick={() => setproductDelete(product)}
                  className="btn btn-danger"
                >
                  Delete
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {productDelete && (
        <ProductDelete
          Action={proDelete}
          data={productDelete}
          title={`Are you sure you want to delete ?`}
          message={`if You delete ${productDelete.name}`}
        ></ProductDelete>
      )}
    </div>
  );
};

export default MyProduct;
