import React, { useEffect, useState } from "react";

import ShowAllMobiles from "./ShowAllMobiles";

const ShowMobiles = () => {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/category`)
      .then((res) => res.json())
      .then((data) => setMobiles(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Choose Your Brand</h1>
      <div className="grid gap-3 mx-6 my-8 mb-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mobiles.map((mobile) => (
          <ShowAllMobiles key={mobile._id} mobile={mobile}></ShowAllMobiles>
        ))}
      </div>
    </div>
  );
};

export default ShowMobiles;
