import { Dispatch } from 'redux';
import { ILoginActions, IForm } from './../types/actions/login.types';
import { authUser } from "../../utils/api/api";
import { setCookie } from "../../utils/cookie";
import { getCookie } from "../../utils/cookie";
import { getUserInfo, changeUserInfo } from "../../utils/api/userInfo";
import { HOME } from "../../app/router/config/routes";
import { AppThunk } from '../store/store.types';

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_FAILED = "PROFILE_FAILED";

export const CHANGE_PROFILE_SUCCESS = "СHANGE_PROFILE_SUCCESS";
export const CHANGE_PROFILE_REQUEST = "СHANGE_PROFILE_REQUEST";
export const CHANGE_PROFILE_FAILED = "СHANGE_PROFILE_FAILED";

export const loginUserAction = (email: string, password: string, navigate:(HOME: string) => void): AppThunk => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    authUser(email, password)
      .then((data) => {
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        setCookie("accessToken", data.accessToken);
        localStorage.setItem("refresh", data.refreshToken);
        navigate(HOME);
      })
      .catch((error) => dispatch({ type: LOGIN_FAILED, error }));
  };
};
export const getUserInfoAction = ():AppThunk => {
  return async (dispatch) => {
    dispatch({ type: PROFILE_REQUEST });
    const token = getCookie("accessToken");
    getUserInfo(String(token))
      .then((data) => dispatch({ type: PROFILE_SUCCESS, payload: data }))
      .catch((error) => dispatch({ type: PROFILE_FAILED, error }));
  };
};

export const changeUserInfoAction = (form: IForm):AppThunk => {
  return async (dispatch) => {
    dispatch({ type: CHANGE_PROFILE_REQUEST });
    const token = getCookie("accessToken");
    changeUserInfo(String(token), form)
      .then((data) => dispatch({ type: CHANGE_PROFILE_SUCCESS, payload: data }))
      .catch((error) => dispatch({ type: CHANGE_PROFILE_FAILED, error }));
  };
};
