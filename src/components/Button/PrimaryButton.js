import React from "react";

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button onClick={handler} className={` btn btn-primary ${classes}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
