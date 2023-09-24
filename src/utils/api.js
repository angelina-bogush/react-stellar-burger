const url = 'https://norma.nomoreparties.space/api';
export const getData = () => {
    return fetch(`${url}/ingredients`)
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .then(data => data.data)
} 

export const createOrderApi = (ingredients) => {
    return fetch(`${url}/orders`,{
       method: "POST",
       header:{
        "Content-type": 'application/json'
       },
      body: JSON.stringify({
        ingredients: ingredients
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .then(data => console.log(data))
      .catch(err => console.log(err))
}