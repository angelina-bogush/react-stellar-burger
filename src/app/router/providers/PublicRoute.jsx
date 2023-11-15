import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { HOME } from "../config/routes"
import { isUserAuth } from "../../../utils/func"

export const PublicRoute = ({children}) => {
  const navigate = useNavigate()
    useEffect(() => {
      if (isUserAuth()) {
        navigate(HOME)
      }
    }, [])
  
    return <>{children}</>
  }