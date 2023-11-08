import { authUser } from "../../utils/api"
import { setCookie } from "../../utils/cookie"
import { getCookie } from "../../utils/cookie"
import { getUserInfo } from "../../utils/api"
import { changeUserInfo } from "../../utils/api"
import { CONSTRUCTOR_PATH } from "../../app/router/config/routes"

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'
export const PROFILE_REQUEST = 'PROFILE_REQUEST'
export const PROFILE_FAILED = 'PROFILE_FAILED'

export const CHANGE_PROFILE_SUCCESS = 'СHANGE_PROFILE_SUCCESS'
export const CHANGE_PROFILE_REQUEST = 'СHANGE_PROFILE_REQUEST'
export const CHANGE_PROFILE_FAILED = 'СHANGE_PROFILE_FAILED'

export  const loginUserAction = (email, password, navigate) => {
    return async (dispatch) => {
        dispatch({type: LOGIN_REQUEST});
        try {
        const data = await authUser(email, password);
        if(data){
        dispatch({type: LOGIN_SUCCESS, payload: data});
        setCookie('accessToken', data.accessToken)
        localStorage.setItem('refresh', data.refreshToken)
        navigate(CONSTRUCTOR_PATH)
        }
        } catch (error) {
         dispatch({type: LOGIN_FAILED, error})
        }
    }
}
export const getUserInfoAction = () => {
    return async (dispatch) => {
        dispatch({type: PROFILE_REQUEST});
        try{
            const token = getCookie('accessToken')
            const data = await getUserInfo(token)
            console.log(data)
            if(data){
                dispatch({type: PROFILE_SUCCESS, payload: data})
            }
        } catch (error){
            dispatch({type: PROFILE_FAILED, error})
        }
    }
}

export const changeUserInfoAction = (form) => {
    return async (dispatch) => {
        dispatch({type: CHANGE_PROFILE_REQUEST});
        try{
            const token = getCookie('accessToken')
            const data = changeUserInfo(token, form)
            if(data){
                dispatch({type: CHANGE_PROFILE_SUCCESS, payload: data})
            }
        } catch(error){
            dispatch({type: CHANGE_PROFILE_FAILED, error})
        }
    }
}