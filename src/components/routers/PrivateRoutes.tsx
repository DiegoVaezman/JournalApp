import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  children: any;
}

export const PrivateRoute = ({ isAuthenticated, children }: Props) => {
  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};
