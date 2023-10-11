import { SET_ORDER_NUMBER_SUCCESS } from "../actions/order-number";

const initialState = {
  order: null,
  sLoading: false,
  error: null,
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_NUMBER_SUCCESS: {
      return {
        order: action.orderNumber,
      };
    }
    default: {
      return {...state};
    }
  }
};
