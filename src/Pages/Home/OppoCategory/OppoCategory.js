import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OppoCategoryCard from "../../Home/OppoCategory/OppoCategoryCard/OppoCategoryCard";

const OppoCategory = ({ opposervice }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/oppoCategory")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-3xl font-semibold text-primary">
          Select Your Category
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 pt-10">
        {services.map((opposervice) => (
          <OppoCategoryCard
            key={opposervice.id}
            opposervice={opposervice}
          ></OppoCategoryCard>
        ))}

        <div>
          <button className="">ff</button>
        </div>
        {/* <div className="mb-4">
          <Link to="/services">
            <button className="btn btn-error">See More</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default OppoCategory;
