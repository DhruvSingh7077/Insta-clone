import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect to login if no token
    return <Navigate to="/login" />;
  }

  // Otherwise render the protected component
  return children;
};

export default ProtectedRoute;
