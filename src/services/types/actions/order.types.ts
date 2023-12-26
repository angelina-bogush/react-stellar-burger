import { SET_ORDER_NUMBER_FAILED, SET_ORDER_NUMBER_SUCCESS, SET_ORDER_NUMBER_REQUEST } from "../../actions/order-number";
interface IOrderSuccess {
    type: typeof SET_ORDER_NUMBER_SUCCESS
    orderNumber: number | null,
}
interface IOrderRequest {
    type: typeof SET_ORDER_NUMBER_REQUEST
}
interface IOrderFailed {
    type: typeof SET_ORDER_NUMBER_FAILED
    payload: Error
}
export type TOrderActions = IOrderFailed | IOrderRequest | IOrderSuccess