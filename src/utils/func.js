import { useSelector } from "react-redux"

export const isUserAuth = () => {
   const auth = localStorage.getItem('accessToken');
   return auth ? true : false
}

