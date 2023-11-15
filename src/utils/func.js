
import { getCookie } from "./cookie";

export const isUserAuth = () => {
   const auth = getCookie('accessToken');
   return auth ? true : false
}

