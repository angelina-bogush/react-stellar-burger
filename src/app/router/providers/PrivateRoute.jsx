import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { LOGIN_PATH } from "../config/routes"
export const PrivateRoute = ({children}) => {
    const isAllowed = isUserAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAllowed) {
      navigate(LOGIN_PATH)
    }
  }, [isAllowed])

  return <>{children}</>
}