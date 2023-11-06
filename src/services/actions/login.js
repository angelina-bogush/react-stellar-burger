import { authUser } from "../../utils/api"
import { setCookie } from "../../utils/cookie"
import { getCookie } from "../../utils/cookie"
import { getUserInfo } from "../../utils/api"

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'
export const PROFILE_REQUEST = 'PROFILE_REQUEST'
export const PROFILE_FAILED = 'PROFILE_FAILED'

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
export const getUsetInfoAction = () => {
    return async (dispatch) => {
        dispatch({type: PROFILE_REQUEST});
        try{
            const token = getCookie('accessToken')
            const data = await getUserInfo(token)
            if(data){
                dispatch({type: PROFILE_SUCCESS, payload: data})
            }
        } catch (error){
            dispatch({type: PROFILE_FAILED, error})
        }
    }
}
