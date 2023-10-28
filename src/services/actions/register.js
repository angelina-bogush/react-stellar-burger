import { createUser } from "../../utils/api";

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_FAILED = 'REGISTER_FAILED'

// export  function registerUser(email, password, name){
//     return function (dispatch){
//         dispatch({type: REGISTER_REQUEST}),
//         createUser(email, password, name)
//         .then(data => dispatch({type: REGISTER_SUCCESS, payload: data}))
//         .catch(err => dispatch({type: REGISTER_FAILED, error: err}))
//     }
// }
export  const registerUser = (email, password, name) => {
    return async (dispatch) => {
        dispatch({type: REGISTER_REQUEST});
        try {
        const data = await createUser(email, password, name);
        dispatch({type: REGISTER_SUCCESS, payload: data});
        localStorage.setItem('refresh', data.refreshToken)
        } catch (error) {
         dispatch({type: REGISTER_FAILED, error})
        }
    }
}

