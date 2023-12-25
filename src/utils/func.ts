import { url } from "./api/api";
import { getCookie } from "./cookie";

export const isUserAuth = () => {
  const auth = getCookie("accessToken");
  return auth ? true : false;
};

export const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

export const request = (options: {}, endpoint: string) => {
  return fetch(`${url}/${endpoint}`, options).then(checkResponse);
};
