const url = 'https://norma.nomoreparties.space/api/ingredients';
export const getData = () => {
    return fetch(url)
    .then(res => res.json())
    .then(data => data.data)
} 