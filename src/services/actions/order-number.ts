import { TOrderActions } from './../types/actions/order.types';
import { createOrderApi } from "../../utils/api/order";
import { clearProducts } from "./burger-constructor";
import { Dispatch } from 'react';
import { IBurgerConstructorActions } from '../types/actions/burger-constructor';

export const SET_ORDER_NUMBER_REQUEST = "SET_ORDER_NUMBER";
export const SET_ORDER_NUMBER_SUCCESS = "SET_ORDER_NUMBER_SUCCESS";
export const SET_ORDER_NUMBER_FAILED = "SET_ORDER_NUMBER_FAILED";

export function setOrderNumberSuccess(orderNumber: number | null): TOrderActions {
  return {
    type: SET_ORDER_NUMBER_SUCCESS,
    orderNumber: orderNumber,
  };
}
export const setOrderNumberRequest = ():TOrderActions => ({
  type: SET_ORDER_NUMBER_REQUEST,
});
export const setOrderNumberFailed = (error: Error):TOrderActions => ({
  type: SET_ORDER_NUMBER_FAILED,
  payload: error,
});

export const createOrder = (ingredId: string[]) => {
  return async (dispatch: Dispatch<IBurgerConstructorActions | TOrderActions>) => {
    dispatch(setOrderNumberRequest());
    createOrderApi(ingredId)
      .then((data) => {
        // dispatch(setOrderNumberSuccess(data.order.number))
        dispatch(clearProducts())
      })
      .catch((error) => dispatch(setOrderNumberFailed(error)));
  };
};
