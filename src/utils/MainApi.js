const apiUrl = 'https://api.zikoshh.nomoredomainsmonster.ru';

const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  return res.json();
};

const auth = () => {
  return fetch(`${apiUrl}/users/me`, {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    },
  }).then(getResponse);
};

const updateUserInfo = ({ name, email }) => {
  return fetch(`${apiUrl}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then(getResponse);
};

const signUp = ({ name, email, password }) => {
  return fetch(`${apiUrl}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  }).then(getResponse);
};

const signIn = ({ email, password }) => {
  return fetch(`${apiUrl}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(getResponse);
};

const signOut = () => {
  return fetch(`${apiUrl}/signout`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    },
  }).then(getResponse);
};

const getFavoriteMovies = () => {
  return fetch(`${apiUrl}/movies`, {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    },
  }).then(getResponse);
};

const addMovieInFavorites = (movie) => {
  return fetch(`${apiUrl}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(movie),
  }).then(getResponse);
};

const removeMovieFromFavorites = (movieId) => {
  return fetch(`${apiUrl}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    },
  }).then(getResponse);
};

export {
  auth,
  updateUserInfo,
  signUp,
  signIn,
  signOut,
  getFavoriteMovies,
  addMovieInFavorites,
  removeMovieFromFavorites,
};
