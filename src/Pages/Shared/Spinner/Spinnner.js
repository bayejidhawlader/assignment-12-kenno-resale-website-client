import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// Spinner
const Spinner = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  return (
    <div>
      {loading ? (
        <ClipLoader color={"#D0021B"} loading={loading} size={50} />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Spinner;
