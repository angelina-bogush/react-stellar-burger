import { logout } from "../../utils/api/api";
import { deleteCookie } from "../../utils/cookie";
import { TLogoutActions } from "../types/actions/logout.types";
import { Dispatch } from "react";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const logoutAction = (token: string) => {
  return async (dispatch: Dispatch<TLogoutActions>) => {
    dispatch({ type: LOGOUT_REQUEST });
    logout(token)
      .then(() => {
        dispatch({ type: LOGOUT_SUCCESS });
        deleteCookie("accessToken");
        localStorage.deleteItem("refresh");
      })
      .catch((error) => dispatch({ type: LOGOUT_FAILED, error }));
  };
};
