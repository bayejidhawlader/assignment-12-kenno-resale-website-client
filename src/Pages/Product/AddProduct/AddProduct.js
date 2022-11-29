import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const handellogin = (data) => {
    console.log(data);
    const product = {
      name: data.name,
      price: data.price,
      number: data.number,
      location: data.location,
      description: data.discription,
    };
    fetch(" https://used-product-market-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Data Upload  successfully");
        navigate("/dashboard/myProduct");
      })

      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="h-[800px] w-96 justify-center items-center mx-auto ">
      <div>
        <h2 className="text-center text-4xl">Add a Product</h2>
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
              type="number"
              {...register("price", { required: "password is required" })}
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Mobile Number</span>
            </label>
            <input
              type="number"
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

          <input className="btn btn-primary w-80  mt-10" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
