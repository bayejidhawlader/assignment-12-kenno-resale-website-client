import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const CategoryHome = ({ service }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/homeCategory")
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
        {services.map((service) => (
          <CategoryCard key={service.id} service={service}></CategoryCard>
        ))}

        <div>
          <button className=""></button>
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

export default CategoryHome;
