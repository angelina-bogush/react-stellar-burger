import { REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from "../actions/register";

const initialState = {
    email: '',
    name: '',
    isLoading: false,
    error: null
}
export const registrationReducer = (state = initialState, action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
            return{
                email: action.payload.user.email,
                name: action.payload.user.name,
                isLoading: false,
                error: null

            }
        case REGISTER_FAILED:
            return{
                email: '',
                name: '',
                isLoading: false,
                error: action.error
            }
        case REGISTER_REQUEST:
            return{
                ...state,
                isLoading: true,
                error: null
            }
            default: {
                return state;
              }
    }

}
