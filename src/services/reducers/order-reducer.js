import { SET_ORDER_NUMBER_SUCCESS, SET_ORDER_NUMBER_REQUEST, SET_ORDER_NUMBER_FAILED } from "../actions/order-number";

const initialState = {
  order: null,
  isLoading: false,
  error: null,
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_NUMBER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        order: action.orderNumber,
      };
    }
    case SET_ORDER_NUMBER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case SET_ORDER_NUMBER_FAILED: {
      return {
        isLoading: false,
        order: null,
        error: "Error",
      };
    }
    default: {
      return state;
    }
  }
};
