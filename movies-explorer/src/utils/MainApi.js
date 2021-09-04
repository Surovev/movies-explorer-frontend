
import checkResponse from './checkResponse.js';

let token = window.localStorage.getItem('jwt');

export const setAuthToken = (t) => {
  token = t;
};

const BASE_URL = 'http://localhost:3003';

export const register = ({ name, password, email }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, password, email })
  })
    .then(checkResponse);
};
export const authorize = ({ name, password, email }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, password, email })
  })
    .then(checkResponse);
};
export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(checkResponse);
};

export const setUserInfo = ({ name, email }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })

  }).then(checkResponse);
};

export const addMovie = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `${data.image.url}`,
      trailer: data.trailerLink,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      thumbnail: `${data.image.formats.thumbnail.url}`,
      movieId: data.id
    })

  }).then(checkResponse);
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }

  }).then(checkResponse);
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(checkResponse);
};
