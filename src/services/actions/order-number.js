import { createOrderApi } from "../../utils/api/order";
export const SET_ORDER_NUMBER_REQUEST = "SET_ORDER_NUMBER";
export const SET_ORDER_NUMBER_SUCCESS = "SET_ORDER_NUMBER_SUCCESS";
export const SET_ORDER_NUMBER_FAILED = "SET_ORDER_NUMBER_FAILED";

export function setOrderNumberSuccess(orderNumber) {
  return {
    type: SET_ORDER_NUMBER_SUCCESS,
    orderNumber: orderNumber,
  };
}
export const setOrderNumberRequest = () => ({
  type: SET_ORDER_NUMBER_REQUEST,
});
export const setOrderNumberFailed = (error) => ({
  type: SET_ORDER_NUMBER_FAILED,
  payload: error,
});

export const createOrder = (ingredId) => {
  return async (dispatch) => {
    dispatch(setOrderNumberRequest());
    createOrderApi(ingredId)
      .then((data) => dispatch(setOrderNumberSuccess(data.order.number)))
      .catch((err) => dispatch(setOrderNumberFailed(err)));
  };
};
