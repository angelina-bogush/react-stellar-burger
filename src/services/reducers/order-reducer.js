import { SET_ORDER_NUMBER} from '../actions/order-number'

const initialState = {
    order: null
}
export const orderReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ORDER_NUMBER:{
            return {
                order: action.orderNumber
            }
        }
        default:{
            return state
        }
    }
}