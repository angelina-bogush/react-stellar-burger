import {
  SET_ORDER_NUMBER_SUCCESS,
  SET_ORDER_NUMBER_REQUEST,
  SET_ORDER_NUMBER_FAILED,
} from "../actions/order-number";
import { TOrderActions } from "../types/actions/order.types";

interface IOrderState{
  order: number | null
  isLoading: boolean | null
  error: null | Error
}

const initialState: IOrderState = {
  order: null,
  isLoading: false,
  error: null,
};
export const orderReducer = (state = initialState, action: TOrderActions) => {
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
