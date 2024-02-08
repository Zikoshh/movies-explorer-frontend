const apiUrl = 'https://api.nomoreparties.co/beatfilm-movies';

const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  return res.json();
};

const getMovies = () => {
  return fetch(apiUrl).then(getResponse);
}

export default getMovies;