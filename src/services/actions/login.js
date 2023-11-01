import { authUser } from "../../utils/api"

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export  const loginUserAction = (email, password) => {
    return async (dispatch) => {
        dispatch({type: LOGIN_REQUEST});
        try {
        const data = await authUser(email, password);
        dispatch({type: LOGIN_SUCCESS, payload: data});
        localStorage.setItem('refresh', data.refreshToken)
        } catch (error) {
         dispatch({type: LOGIN_FAILED, error})
        }
    }
}
