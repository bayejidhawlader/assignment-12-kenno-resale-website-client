import React from "react";
import { Link } from "react-router-dom";

const ShowAllMobiles = ({ mobile }) => {
  const { picture, name, description, _id } = mobile;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-64" src={picture} alt="car" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-center">
            <Link to={`/category/${_id}`}>See Product</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowAllMobiles;
