import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log("my usrss", user);
  const location = useLocation();
  return (
    <div>
      {user ? (
        children
      ) : (
        <Navigate to="/login" replace state={{ from: location }} />
      )}
    </div>
  );
};

export default PrivateRoute;
