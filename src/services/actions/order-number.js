export const SET_ORDER_NUMBER_REQUEST = "SET_ORDER_NUMBER";
export const SET_ORDER_NUMBER_SUCCESS = 'SET_ORDER_NUMBER_SUCCESS'
export const SET_ORDER_NUMBER_FAILED = 'SET_ORDER_NUMBER_FAILED'


export function setOrderNumberSuccess(orderNumber) {
  return {
    type: SET_ORDER_NUMBER_SUCCESS,
    orderNumber: orderNumber,
  };
}
export const setOrderNumberRequest = () => ({
  type: SET_ORDER_NUMBER_REQUEST,
});
export const setOrderNumberFailed = () => ({
  type: SET_ORDER_NUMBER_FAILED,
});