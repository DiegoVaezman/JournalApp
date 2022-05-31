import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  children: any;
}

export const PublicRoute = ({ isAuthenticated, children }: Props) => {
  return isAuthenticated ? <Navigate to="/" /> : children;
};
