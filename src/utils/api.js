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
    const {data} = await axios.post(`${url}/auth/login`, {email, password})
    console.log(data)
    return data
  } catch (error){
    throw error
  }
}
export const refreshToken = async (token) => {
  try{
    const {data} = await axios.post(`${url}/auth/token`, {token})
    return data
  } catch (error){
    throw error
  }
}
export const logout = async (token ) => {
  try{
    const {data} = await axios.post(`${url}/auth/logout`, {token})
    return data
  } catch (error){
    throw error
  }
}

export const getUserInfo = async () => {
  try{
    const {data} = await axios.get(`${url}/auth/user`)
    console.log(data)
    return data
  } catch(error){
    throw error
  }
}