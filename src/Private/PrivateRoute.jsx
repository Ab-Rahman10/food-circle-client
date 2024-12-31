import React from "react";
import useAuth from "../Hooks/Context";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );
  }
  if (user) return children;
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
