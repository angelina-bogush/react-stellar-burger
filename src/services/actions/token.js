import { refreshToken } from "../../utils/api"
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS'
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED'
export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST'

export  const refreshTokenAction = (token) => {
    return async (dispatch) => {
        dispatch({type: REFRESH_TOKEN_REQUEST});
        try {
        const data = await refreshToken(token);
        dispatch({type: REFRESH_TOKEN_SUCCESS, payload: data});
        localStorage.setItem('refresh', data.refreshToken)
        } catch (error) {
         dispatch({type: REFRESH_TOKEN_FAILED, error})
         localStorage.removeItem('refresh')
        }
    }
}