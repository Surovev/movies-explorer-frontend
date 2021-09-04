import checkResponse from './checkResponse.js';

const getInitialMovies = (token) => {
  return fetch(`${process.env.PUBLIC_URL + "/response.json"}`, {
    method: 'GET',
    headers: {
    //   Authorization: `Bearer ${token}`
    }
  })
    .then(checkResponse);
}
;


export default getInitialMovies;
