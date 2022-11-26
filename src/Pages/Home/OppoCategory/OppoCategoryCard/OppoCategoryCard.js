import React from "react";

const OppoCategoryCard = ({ opposervice }) => {
  const { _id, name, location, picture } = opposervice;
  console.log(opposervice);
  return (
    <div className="m-6">
      <div className="card">
        <img src={picture} alt="" />
        <div className="card-body">
          <h2 className="card-title text-start">{name}</h2>
          <p className="text-start">{location}...</p>
          <div className="card-actions justify-end">
            {/* <div className="badge badge-outline text-white font-semibold p-6">
              ${price}
            </div> */}
            {/* <Link to={`/oppo_category/${_id}`}>
              <button className="btn btn-primary">View Detsils</button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OppoCategoryCard;
