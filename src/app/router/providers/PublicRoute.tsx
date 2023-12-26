import { Navigate, useLocation } from "react-router-dom";
import { isUserAuth } from "../../../utils/func";
import { FC } from "react";

export const PublicRoute:FC = ({ children }) => {
  const location = useLocation();
  const from = location.state?.from || "/";
  if (isUserAuth()) {
    return <Navigate to={from} />;
  }

  return <>{children}</>;
};
