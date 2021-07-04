const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((data) => {
    if (data.message) {
      console.log(data.message);
      return `Ошибка: ${data.message}`;
    } else {
      throw Promise.reject(`Ошибка: ${res.status}`);
    }
  });
};

module.exports = checkResponse;
