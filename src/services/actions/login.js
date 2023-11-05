import { authUser } from "../../utils/api"
import { setCookie } from "../../utils/cookie"

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export  const loginUserAction = (email, password) => {
    return async (dispatch) => {
        dispatch({type: LOGIN_REQUEST});
        try {
        const data = await authUser(email, password);
        if(data){
        dispatch({type: LOGIN_SUCCESS, payload: data});
        setCookie('accessToken', data.accessToken)
        localStorage.setItem('refresh', data.refreshToken)
        }
        } catch (error) {
         dispatch({type: LOGIN_FAILED, error})
        }
    }
}
