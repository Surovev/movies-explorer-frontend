import checkResponse from './checkResponse.js';

const getInitialMovies = (token) => {
  return fetch('https://api.nomoreparties.co/beatfilm-movies', {
    method: 'GET',
    headers: {
    //   Authorization: `Bearer ${token}`
    }
  })
    .then(checkResponse);
}
;

export default getInitialMovies;
