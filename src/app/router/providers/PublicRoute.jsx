import { useNavigate, Navigate, useLocation } from "react-router-dom"
import { isUserAuth } from "../../../utils/func"

export const PublicRoute = ({children}) => {
  const location = useLocation();
  const from = location.state?.from || "/";
    if (isUserAuth()) {
      return <Navigate to={from} />;
    }
  
    return <>{children}</>
  }