import { url } from "./api/api";
import { getCookie } from "./cookie";

export const isUserAuth = () => {
  const auth = getCookie("accessToken");
  return auth ? true : false;
};

export const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json() as Promise<T>;
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

export const request = <T>(options: {}, endpoint: string): Promise<T> => {
  return fetch(`${url}/${endpoint}`, options).then(checkResponse<T>);
};
