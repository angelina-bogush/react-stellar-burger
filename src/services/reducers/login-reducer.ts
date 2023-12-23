import { TLogoutActions } from './../types/actions/logout.types';
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILED,
  PROFILE_FAILED,
  PROFILE_SUCCESS,
  PROFILE_REQUEST,
  CHANGE_PROFILE_FAILED,
  CHANGE_PROFILE_REQUEST,
  CHANGE_PROFILE_SUCCESS,
} from "../actions/login";
import { ILoginActions } from "../types/actions/login.types";
import {
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "../actions/logout";
const initialState = {
  email: "",
  name: "",
  isAuthChecked: false,
  isLoading: false,
  error: null,
};
export const loginReducer = (state = initialState, action: ILoginActions | TLogoutActions) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        email: action.payload.user.email,
        name: action.payload.user.name,
        isLoading: false,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        email: "",
        name: "",
        isLoading: false,
        error: action.error,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case LOGOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        email: "",
        name: "",
        isLoading: false,
        error: null,
        accessToken: "",
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case PROFILE_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case PROFILE_SUCCESS:
      return {
        email: action.payload.user.email,
        name: action.payload.user.name,
        isLoading: false,
        error: null,
      };
    case CHANGE_PROFILE_SUCCESS:
      return {
        email: action.payload.user.email,
        name: action.payload.user.name,
        isLoading: false,
        error: null,
      };
    case CHANGE_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CHANGE_PROFILE_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
