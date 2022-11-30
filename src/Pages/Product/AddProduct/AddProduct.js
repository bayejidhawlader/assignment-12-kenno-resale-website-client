import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  // Show Product Category
  const { data: productsCategory, isLoading } = useQuery({
    queryKey: ["productCategory"],
    queryFn: async () => {
      const res = await fetch(
        "https://server-vert-nu.vercel.app/productCategory"
      );
      const data = await res.json();
      return data;
    },
  });
  const navigate = useNavigate();
  const handellogin = (data) => {
    // console.log(data);
    const product = {
      name: data.name,
      price: data.price,
      number: data.number,
      location: data.location,
      description: data.discription,
    };
    fetch("https://server-vert-nu.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        toast.success("Product Added successfully");
        navigate("/dashboard/myproduct");
      })

      .then((result) => {
        const user = result.user;
        // console.log(user);
      })
      .catch((error) => console.log(error));
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-96 mx-auto">
      <div>
        <h2 className="text-center text-4xl my-6">Add a Product</h2>
        <form
          className="border mx-auto p-10 mt-7  "
          onSubmit={handleSubmit(handellogin)}
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="First name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="text"
              {...register("price", { required: "password is required" })}
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Product Category</span>
            </label>
            <select className="select select-bordered w-full max-w-xs">
              {productsCategory?.length &&
                productsCategory.map((productCategory) => (
                  <option
                    key={productCategory._id}
                    value={productCategory.brandName}
                  >
                    {productCategory.brandName}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Condition</span>
            </label>
            <select className="select select-bordered w-full max-w-xs">
              <option selected>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Mobile Number</span>
            </label>
            <input
              type="text"
              {...register("number", { required: true })}
              placeholder="Mobile Number"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Location</span>
            </label>
            <input
              type="text"
              {...register("location", { required: true })}
              placeholder="Location"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Discription</span>
            </label>
            <input
              type="text"
              {...register("discription", { required: true })}
              placeholder="Discription"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Year of Uses</span>
            </label>
            <input
              type="text"
              {...register("discription", { required: true })}
              placeholder="Discription"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <input
            className="btn btn-primary w-80  mt-10"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
