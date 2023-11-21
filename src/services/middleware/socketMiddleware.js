export const socketMiddleware = (url, wsActions) => {
    return storeAPI => {
      let socket = null;
      let isConnected = false;
  
      return next => action => {
        const { dispatch } = storeAPI;
        const { type, payload } = action;
        const {
            wsConnect,
            wsSendMessage,
            onOpen,
            onClose,
            onError,
            onMessage,
            wsConnecting,
            wsDisconnect,
        } = wsActions;

        if (type === wsConnect) {
            socket = new WebSocket(action.payload);
            isConnected = true;
            dispatch({type: wsConnecting});
        }
        if (socket) {
            socket.onopen = () => {
                dispatch({ type: onOpen });
            };
            socket.onerror = () => {
                dispatch({ type: onError, payload: 'Error' });
                // dispatch({type: wsConnect});
            };
            socket.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.message === "Invalid or missing token")
                {
                    dispatch (checkUserAuth());
                    dispatch({type: wsConnect});
                }
                else {
                    dispatch({ type: onMessage, payload: parsedData });
                }
            };
            socket.onclose = event => {
                if(event.code !== 1000) {
                    dispatch({type: onError, payload: event.code.toString()});
                }
                dispatch({ type: onClose });
                if(isConnected){
                    dispatch({type: wsConnecting});
                    reconnectTimer = window.setTimeout(()=> {
                    dispatch({type: wsConnect});
                    }, 3000);
                }
            };

        }
        if (type === wsSendMessage) {
            socket.send(JSON.stringify(action.payload));
        }
        if (type === wsDisconnect) {
            socket.close();
            socket = null;
            clearTimeout(reconnectTimer);
            isConnected = false;
        }
      }
      next(action);
    } }
 
  
    //     switch (type) {
    //       case FEED_CONNECT: {
    //         if (!socket) {
    //           socket = new WebSocket(url);
    //           socket.onopen = () => {
    //             dispatch({ type: FEED_CONNECTION_SUCCESS });
    //           };
    //           socket.onerror = (error) => {
    //             dispatch({ type: FEED_CONNECTION_ERROR, payload: error });
    //           };
    //           socket.onmessage = (event) => {
    //             const data = JSON.parse(event.data);
    //             dispatch({ type: FEED_GET_FEED, payload: data });
    //           };
    //           socket.onclose = () => {
    //             dispatch({ type: FEED_CONNECTION_CLOSED });
    //           };
    //         }
    //         break;
    //       }
    //       case FEED_DISCONNECT: {
    //         if (socket) {
    //           socket.close();
    //           socket = null;
    //         }
    //         break;
    //       }
    //       default:
    //         return next(action);
    //     }
    //   };
    // };

  
//   export default socketMiddleware;