export const SET_ORDER_NUMBER = "SET_ORDER_NUMBER";

export function setOrderNumber(orderNumber) {
  return {
    type: SET_ORDER_NUMBER,
    orderNumber: orderNumber,
  };
}
