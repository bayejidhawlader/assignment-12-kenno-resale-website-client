import React, { useState, useEffect } from "react";

const AllSellers = () => {
  const [allSeller, setAllSeller] = useState([]);
  console.log(allSeller);
  //  load all user data

  useEffect(() => {
    fetch("http://localhost:5000/allUser")
      .then((res) => res.json())
      .then((data) => {
        setAllSeller(data);
      });
  }, []);

  return (
    <div>
      <h1>length:{allSeller.length}</h1>
    </div>
  );
};

export default AllSellers;
