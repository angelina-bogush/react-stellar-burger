import { useNavigate } from "react-router-dom"
import { deleteCookie, getCookie } from "../../../utils/cookie"
import { useEffect } from "react"
import { HOME } from "../config/routes"


export const PublicRoute = ({children}) => {
    const accessToken = getCookie('accessToken')
    const navigate = useNavigate()
    useEffect(() => {
      if (accessToken) {
        navigate(HOME)
      }
    }, [accessToken])
  
    return <>{children}</>
  }