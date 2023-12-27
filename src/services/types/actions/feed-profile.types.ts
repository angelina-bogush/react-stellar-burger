import { PROFILE_FEED_CLOSE, PROFILE_FEED_CONNECT, PROFILE_FEED_CONNECTING, PROFILE_FEED_DISCONNECT, PROFILE_FEED_ERROR, PROFILE_FEED_GET_FEED,PROFILE_FEED_OPEN } from "../../actions/feed-profile";
import { IOrdersTotal } from "../feed";
interface IProfileFeedConnect {
    type: typeof PROFILE_FEED_CONNECT;
    payload: string
  }
  interface IProfileFeedConnecting {
    type: typeof PROFILE_FEED_CONNECTING;
  }
  interface IProfileFeedConnectionClosed {
    type: typeof PROFILE_FEED_CLOSE;
  }
  interface IProfileFeedConnectionError {
    type: typeof PROFILE_FEED_ERROR;
    payload: Error
  }
  interface IProfileFeedConnectionSuccess {
    type: typeof PROFILE_FEED_OPEN;
  }
  interface IProfileFeedDisconnect {
    type: typeof PROFILE_FEED_DISCONNECT;
  }
  interface IProfileFeedGetFeed {
    type: typeof PROFILE_FEED_GET_FEED;
    payload: IOrdersTotal
  }
  export type TProfileFeedActionTypes =
    | IProfileFeedConnect
    | IProfileFeedConnecting
    | IProfileFeedConnectionClosed
    | IProfileFeedConnectionError
    | IProfileFeedConnectionSuccess
    | IProfileFeedDisconnect
    | IProfileFeedGetFeed;
  