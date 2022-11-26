import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ service }) => {
  const { _id, title, img } = service;
  return (
    <div className="m-6">
      <div className="card">
        <img src={img} alt="ffffffffff" />
        <div className="card-body">
          <h2 className="card-title text-start">{title}</h2>
          {/* <p className="text-start">{description}...</p> */}
          <div className="card-actions justify-end">
            {/* <div className="badge badge-outline text-white font-semibold p-6">
              ${price}
            </div> */}
            <Link to={`/category/${_id}`}>
              <button className="btn btn-primary">View Detsils</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
