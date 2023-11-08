import { useNavigate } from "react-router-dom"
import { getCookie } from "../../../utils/cookie"
import { useEffect } from "react"

export const PublicRoute = ({children}) => {
    const accessToken = getCookie('accessToken')
    const navigate = useNavigate()
    useEffect(() => {
      if (accessToken) {
        navigate('main')
      }
    }, [accessToken])
  
    return <>{children}</>
  }