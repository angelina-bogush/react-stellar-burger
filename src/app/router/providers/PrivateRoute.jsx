import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { LOGIN_PATH } from "../config/routes"
import { isUserAuth } from "../../../utils/func"


export const PrivateRoute = ({children}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isUserAuth()) {
      navigate(LOGIN_PATH)
    }
  }, [])

  return <>{children}</>

}