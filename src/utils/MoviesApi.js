const apiUrl = 'https://api.nomoreparties.co/beatfilm-movies';

const getResponse = async (res) => {
  if (!res.ok) {
    return Promise.reject(await res.json());
  }

  return res.json();
};

export const getMovies = () => {
  return fetch(apiUrl).then(getResponse);
};
