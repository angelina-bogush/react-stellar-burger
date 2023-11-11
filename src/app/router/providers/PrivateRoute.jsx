import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { LOGIN_PATH } from "../config/routes"
import { getCookie,setCookie } from "../../../utils/cookie"
import { refreshToken } from "../../../utils/api/api"
export const PrivateRoute = ({children}) => {
  const accessToken = getCookie('accessToken')
  const refresh = localStorage.getItem('refresh')

  // const updateToken = () => {
  //   setInterval(async () => {
  //     try {
  //       const tokenParts = accessToken.split('.')
  //       const payload = JSON.parse(atob(tokenParts[1]))
  //       const currentTime = Math.floor(Date.now() / 1000)
  //       if (payload.exp < currentTime) {
  //         const newToken = await refreshToken(refresh)
  //         setCookie('accessToken', newToken.accessToken, 20) // Установить новый токен сроком на 20 минут
  //         localStorage.setItem('refresh', newToken.refreshToken)
  //         console.log('обновлен токен')
  //       }
  //     } catch (error) {
  //       console.error('Error refreshing token:', error)
  //     }
  //   }, 20 * 60 * 1000) // Выполнять проверку каждые 20 минут
  // }
  // updateToken()

  const navigate = useNavigate()

  useEffect(() => {
    if (!accessToken) {
      navigate(LOGIN_PATH)
    }
  }, [accessToken])

  return <>{children}</>
}