import { logout } from "../../utils/api"
import { deleteCookie } from "../../utils/cookie"
import { useNavigate } from "react-router-dom"
import { LOGIN_PATH } from "../../app/router/config/routes"

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_FAILED = 'LOGOUT_FAILED'

export const logoutAction = (token) => {
    return async(dispatch) => {
        dispatch({type: LOGOUT_REQUEST});
        try {
        const data = await logout(token);

        if(data){
        dispatch({type: LOGOUT_SUCCESS});
        deleteCookie('accessToken')
        localStorage.deleteItem('refresh')

        }

        } catch (error) {
         dispatch({type: LOGOUT_FAILED, error})
        }
    }

}

