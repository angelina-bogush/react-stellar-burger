import axios from 'axios'
const url = "https://norma.nomoreparties.space/api";
export const getData = () => {
  return fetch(`${url}/ingredients`)
    .then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    )
    .then((data) => data.data);
};

export const createOrderApi = (ingredients) => {
  return fetch(`${url}/orders`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      ingredients: ingredients,
    }),
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  );
};

export const createUser = async (email, password, name) => {
  try{
  const {data} = await axios.post(`${url}/auth/register`, {email: email, password: password, name: name})
  console.log(data)
  return data
  } catch(error){
    console.log(error);
    throw error
  }
}

export const forgotPassword = async (email) => {
  const res = await axios.post(`${url}/password-reset`, {email: email})
  return res
}

export const resetPassword = async (password, token) => {
  const res = await axios.post(`${url}/password-reset/reset`, {password: password, token: token})
  return res
}