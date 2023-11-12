import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { LOGIN_PATH } from "../config/routes"
import { getCookie,setCookie } from "../../../utils/cookie"
import { Route } from "react-router-dom"

export const PrivateRoute = ({children}) => {
  const accessToken = getCookie('accessToken')
  const navigate = useNavigate()

  useEffect(() => {
    if (!accessToken) {
      navigate(LOGIN_PATH)
    }
  }, [accessToken])

  return <>{children}</>
// }
// export const PrivateRoute = ({component: Component, ...rest}) => {
//   const accessToken = getCookie('accessToken')
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (!accessToken) {
//       navigate(LOGIN_PATH)
//     }
//   }, [accessToken])

//   return <Route {...rest} element={<Component/>} />;

}