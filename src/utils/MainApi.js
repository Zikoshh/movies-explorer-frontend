const apiUrl = 'https://api.zikoshh.nomoredomainsmonster.ru';

const getResponse = async (res) => {
  if (!res.ok) {
    return Promise.reject(await res.json());
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

const updateUserInfo = (userInfo) => {
  return fetch(`${apiUrl}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  }).then(getResponse);
};

const signUp = (credentials) => {
  return fetch(`${apiUrl}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then(getResponse);
};

const signIn = (credentials) => {
  return fetch(`${apiUrl}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
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

const getSavedMovies = () => {
  return fetch(`${apiUrl}/movies`, {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    },
  }).then(getResponse);
};

const saveMovie = (movie) => {
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

const removeMovie = (movieId) => {
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
  getSavedMovies,
  saveMovie,
  removeMovie,
};
