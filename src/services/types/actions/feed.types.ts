import {
  FEED_CONNECT,
  FEED_CONNECTING,
  FEED_CONNECTION_CLOSED,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_SUCCESS,
  FEED_DISCONNECT,
  FEED_GET_FEED,
} from "../../actions/feed";
import { IOrdersTotal } from "../feed";

interface IFeedConnect {
  type: typeof FEED_CONNECT;
  payload: string
}
interface IFeedConnecting {
  type: typeof FEED_CONNECTING;
}
interface IFeedConnectionClosed {
  type: typeof FEED_CONNECTION_CLOSED;
}
interface IFeedConnectionError {
  type: typeof FEED_CONNECTION_ERROR;
  payload: Error
}
interface IFeedConnectionSuccess {
  type: typeof FEED_CONNECTION_SUCCESS;
}
interface IFeedDisconnect {
  type: typeof FEED_DISCONNECT;
}
interface IFeedGetFeed {
  type: typeof FEED_GET_FEED;
  payload: IOrdersTotal
}
export type TFeedActionTypes =
  | IFeedConnect
  | IFeedConnecting
  | IFeedConnectionClosed
  | IFeedConnectionError
  | IFeedConnectionSuccess
  | IFeedDisconnect
  | IFeedGetFeed;
