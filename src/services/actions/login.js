import { authUser } from "../../utils/api/api";
import { setCookie } from "../../utils/cookie";
import { getCookie } from "../../utils/cookie";
import { getUserInfo, changeUserInfo } from "../../utils/api/userInfo";
import { HOME } from "../../app/router/config/routes";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_FAILED = "PROFILE_FAILED";

export const CHANGE_PROFILE_SUCCESS = "СHANGE_PROFILE_SUCCESS";
export const CHANGE_PROFILE_REQUEST = "СHANGE_PROFILE_REQUEST";
export const CHANGE_PROFILE_FAILED = "СHANGE_PROFILE_FAILED";

export const loginUserAction = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    authUser(email, password)
      .then((data) => {
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        setCookie("accessToken", data.accessToken);
        localStorage.setItem("refresh", data.refreshToken);
        navigate(HOME);
      })
      .catch((err) => dispatch({ type: LOGIN_FAILED, err }));
  };
};
export const getUserInfoAction = () => {
  return async (dispatch) => {
    dispatch({ type: PROFILE_REQUEST });
    const token = getCookie("accessToken");
    getUserInfo(token)
      .then((data) => dispatch({ type: PROFILE_SUCCESS, payload: data }))
      .catch((err) => dispatch({ type: PROFILE_FAILED, err }));
  };
};

export const changeUserInfoAction = (form) => {
  return async (dispatch) => {
    dispatch({ type: CHANGE_PROFILE_REQUEST });
    const token = getCookie("accessToken");
    changeUserInfo(token, form)
      .then((data) => dispatch({ type: CHANGE_PROFILE_SUCCESS, payload: data }))
      .catch((err) => dispatch({ type: CHANGE_PROFILE_FAILED, err }));
  };
};
