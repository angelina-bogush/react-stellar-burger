
import { LOGOUT_FAILED, LOGOUT_SUCCESS, LOGOUT_REQUEST } from "../../actions/logout";

interface ILogoutSuccess {
    type: typeof LOGOUT_SUCCESS
}
interface ILogoutRequest {
    type: typeof LOGOUT_REQUEST
}
interface ILogoutFailed {
    type: typeof LOGOUT_FAILED
    error: Error
}

export type TLogoutActions = ILogoutFailed | ILogoutRequest | ILogoutSuccess