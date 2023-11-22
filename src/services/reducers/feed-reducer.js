import { socketMiddleware } from "../middleware/socketMiddleware";
import {
  FEED_DISCONNECT,
  FEED_CONNECTION_CLOSED,
  FEED_CONNECTION_ERROR,
  FEED_GET_FEED,
  FEED_CONNECTION_SUCCESS,
  FEED_CONNECTING,
  FEED_CONNECT,
} from "../actions/feed";
const initialState = {
  orders: [],
  total: null,
  totalToday: null,
  isLoading: false,
  wsConnected: false,
  error: null,
};
export const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEED_CONNECTING:
      return {
        ...state,
        isLoading: true,
      };
    case FEED_CONNECTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wsConnected: true,
        error: null,
      };
    case FEED_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case FEED_GET_FEED:
      return {
        ...state,
        wsConnected: true,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    case FEED_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        error: null,
      };
    default:
      return state;
  }
};

export const feedMiddleware = socketMiddleware({
  wsConnect: FEED_CONNECT,
  wsDisconnect: FEED_DISCONNECT,
  wsConnecting: FEED_CONNECTING,
  onOpen: FEED_CONNECTION_SUCCESS,
  onClose: FEED_CONNECTION_CLOSED,
  onError: FEED_CONNECTION_ERROR,
  onMessage: FEED_GET_FEED,
});
