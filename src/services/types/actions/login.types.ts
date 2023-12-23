
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, PROFILE_FAILED, PROFILE_SUCCESS, PROFILE_REQUEST, CHANGE_PROFILE_FAILED, CHANGE_PROFILE_REQUEST, CHANGE_PROFILE_SUCCESS } from "../../actions/login";
export interface IForm{
    name: string
    email: string
}
export type TUser = {
    user: IForm
}
interface ILoginSuccess{
type: typeof LOGIN_SUCCESS
payload: TUser
}
interface ILoginFailed{
type: typeof LOGIN_FAILED
error: Error
}
interface ILoginRequest{
    type: typeof LOGIN_REQUEST
}
interface IProfileFailed{
    type: typeof PROFILE_FAILED
    error: Error
}
interface IProfileSuccess {
    type: typeof PROFILE_SUCCESS
    payload: TUser
}
interface IProfileRequest {
    type: typeof PROFILE_REQUEST
}
interface IChangeProfileFailed {
    type: typeof CHANGE_PROFILE_FAILED
    error: Error
}
interface IChangeProfileRequest {
    type: typeof CHANGE_PROFILE_REQUEST
}
interface IChangeProfileSuccess {
    type: typeof CHANGE_PROFILE_SUCCESS
    payload: TUser
}
export type ILoginActions = ILoginFailed | ILoginRequest | ILoginSuccess | IProfileFailed | IProfileRequest | IProfileSuccess | IChangeProfileFailed | IChangeProfileRequest | IChangeProfileSuccess
