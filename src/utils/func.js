import { url } from "./api/api";
import { getCookie } from "./cookie";

export const isUserAuth = () => {
   const auth = getCookie('accessToken');
   return auth ? true : false
}

export const checkResponse = (res) => {
   if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const request = (options, endpoint) => {
   return fetch(`${url}/${endpoint}`, options).then(checkResponse)
}