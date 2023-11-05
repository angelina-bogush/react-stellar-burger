import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILED } from "../actions/login"
import { REFRESH_TOKEN_FAILED, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_REQUEST } from "../actions/token"
import { LOGOUT_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../actions/logout"
const initialState = {
    email: '',
    name: '',
    accessToken: '',
    isLoading: false,
    error: null
}
export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                email: action.payload.user.email,
                name: action.payload.user.name,
                accessToken: action.payload.accessToken,
                isLoading: false,
                error: null

            }
        case LOGIN_FAILED:
            return{
                email: '',
                name: '',
                accessToken: '',
                isLoading: false,
                error: action.error
            }
        case LOGIN_REQUEST:
            return{
                ...state,
                isLoading: true,
                error: null
            }
        case REFRESH_TOKEN_SUCCESS:
                return {
                  ...state,
                  accessToken: action.payload.accessToken,
                  isLoading: false,
                  error: null
                };
        case REFRESH_TOKEN_FAILED:
                return {
                    ...state,
                    accessToken: '',
                    error: action.error
                }
        case REFRESH_TOKEN_REQUEST:
                return{
                    ...state,
                    accessToken: '',
                    error: null,
                    isLoading: true
                }
        default: {
                return state;
              }
    }

};

export const logoutReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGOUT_REQUEST:{
            return{
                ...state,
                isLoading: true,
                error: null
            }
        }
        case LOGOUT_SUCCESS:{
            return{
                email: '',
                name: '',
                isLoading: false,
                error: null,
                accessToken: ''
            }
        }
        case LOGOUT_FAILED:{
            return{
                    ...state,
                    isLoading: true,
                    error: null
            }
        }
        default: {
                return state;
              }

    }
}