import axios from 'axios'
import { getCookie, setCookie } from '../cookie';
import { LOGIN_PATH } from '../../app/router/config/routes';
export const url = "https://norma.nomoreparties.space/api";

export const api = axios.create({
  baseURL: "https://norma.nomoreparties.space/api"
});

export const refreshToken = async () => {
  try{
    const refresh = localStorage.getItem('refresh')
    const {data} = await axios.post(`${url}/auth/token`, {token: refresh})
    localStorage.setItem('refresh', data.refreshToken)
    setCookie('accessToken', data.accessToken)
    return data
  } catch (error){
    throw error
  }
}

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status === 403 || error.response.status === 403 ) {
      try {
        return refreshToken()
        .then(() => {
          const updatedToken = getCookie('accessToken')
          const updatedConfig = { ...error.config, headers: { authorization: updatedToken } };
          return api.request(updatedConfig);
        })
      } catch (error) {
        window.location.href = LOGIN_PATH;
        return await Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);



export const createUser = async (email, password, name) => {
  try{
  const {data} = await axios.post(`${url}/auth/register`, {email, password, name})
  console.log(data)
  return data
  } catch(error){
    throw error
  }
}

export const forgotPassword = async (email) => {
 try{
  const res = await axios.post(`${url}/password-reset`, {email})
  return res
 } catch(error){
  throw error
 }
}

export const resetPassword = async (password, token) => {
  const res = await axios.post(`${url}/password-reset/reset`, {password, token})
  console.log(res)
  return res
}

export const authUser = async (email, password) => {
  try{
    const {data} = await api.post(`${url}/auth/login`, {email, password})
    console.log(data)
    return data
  } catch (error){
    throw error
  }
}

export const logout = async (token ) => {
  try{
    const {data} = await api.post(`${url}/auth/logout`, {token})
    return data
  } catch (error){
    throw error
  }
}
