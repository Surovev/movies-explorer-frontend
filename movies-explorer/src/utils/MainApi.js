import BASE_URL from './moviesAuth.js';

import checkResponse from './checkResponse.js';

export const setUserInfo = ({ name, email }, token) => {
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
}
;
