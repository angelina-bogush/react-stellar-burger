import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILED, PROFILE_FAILED, PROFILE_SUCCESS, PROFILE_REQUEST, CHANGE_PROFILE_FAILED, CHANGE_PROFILE_REQUEST, CHANGE_PROFILE_SUCCESS} from "../actions/login"
import { REFRESH_TOKEN_FAILED, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_REQUEST } from "../actions/token"
import { LOGOUT_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../actions/logout"
const initialState = {
    email: '',
    name: '',
    isLoading: false,
    error: null
}
export const loginReducer = (state = initialState, action) => {
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
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case REFRESH_TOKEN_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
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
