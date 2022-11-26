import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCategory = () => {
  const { _id, title, img } = useLoaderData();
  //   console.log(name);

  return (
    <div>
      <div className="card  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          {/* <p>{description}</p> */}
          <div className="card-actions">
            {/* <div className="badge badge-outline text-white font-semibold p-6">
              ${price}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
