import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleOppoCategory = ({ params }) => {
  const [_id, picture, name, location] = useLoaderData();
  console.log(name);
  //   console.log(name);

  return (
    <div>
      <div className="card shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes |||" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleOppoCategory;
