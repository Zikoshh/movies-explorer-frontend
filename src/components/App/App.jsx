import './App.css';
import CurrentUserContext from '../CurrentUserContext';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Main from '../Main/index';
import Movies from '../Movies/index';
import SavedMovies from '../SavedMovies/index';
import Profile from '../Profile/index';
import NotFound from '../NotFound/index';
import SignIn from '../SignIn/index';
import SignUp from '../SignUp/index';
import ProtectedRoute from '../ProtectedRoute/index';
import * as MoviesApi from '../../utils/MoviesApi';
import * as MainApi from '../../utils/MainApi';
import movieFilter from '../../utils/movieFilter';

const App = () => {
  const userId = localStorage.getItem('userId');
  const [isLoggedIn, setIsLoggedIn] = useState(userId ? true : false);
  const [currentUser, setCurrentUser] = useState({});
  const [tipTextSignIn, setTipTextSignIn] = useState('');
  const [tipTextSignUp, setTipTextSignUp] = useState('');
  const [tipTextProfile, setTipTextProfile] = useState('');
  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(localStorage.getItem('savedMovies')) || []
  );
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem('filteredMovies')) || []
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      MainApi.auth()
        .then((userData) => {
          localStorage.setItem('userId', userData._id);
          setCurrentUser(userData);
          setIsLoggedIn(true);
        })
        .catch(({ message }) => {
          console.log(message);
          localStorage.clear();
          setIsLoggedIn(false);
        });

      Promise.all([MoviesApi.getMovies(), MainApi.getSavedMovies()])
        .then(([allMovies, savedMovies]) => {
          const newAllMovies = allMovies.map((movie) => {
            return {
              ...movie,
              saved: savedMovies.some(
                (savedMovie) => savedMovie.id === movie.id
              ),
            };
          });

          localStorage.setItem('allMovies', JSON.stringify(newAllMovies));
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

  /*Логика выхода из приложения*/
  const handleSignOut = () => {
    MainApi.signOut()
      .then(() => {
        localStorage.clear();
        setIsLoggedIn(false);
        setCurrentUser({});
        setTipTextSignIn('');
        setTipTextSignUp('');
        setTipTextProfile('');
        setSavedMovies([]);
        setFilteredMovies([]);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setIsLoggedIn(true);
      });
  };

  /*Логика Авторизации*/
  const handleSignIn = (credentials) => {
    MainApi.signIn(credentials)
      .then((userData) => {
        localStorage.setItem('userId', userData._id);
        setCurrentUser(userData);
        setIsLoggedIn(true);
        navigate('/movies');
      })
      .catch(({ message }) => {
        setTipTextSignIn(message);
        setIsLoggedIn(false);
      });
  };

  /*Логика Регистрации*/
  const handleSignUp = (credentials) => {
    MainApi.signUp(credentials)
      .then((userData) => {
        localStorage.setItem('userId', userData._id);
        setCurrentUser(userData);
        setIsLoggedIn(true);
        navigate('/movies');
      })
      .catch(({ message }) => {
        setTipTextSignUp(message);
        setIsLoggedIn(false);
      });
  };

  /*Логика редактирования профиля*/
  const handleEditProfile = (userInfo) => {
    MainApi.updateUserInfo(userInfo)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch(({ message }) => {
        setTipTextProfile(message);
      });
  };

  /*Логика поиска фильмов на странице /movies*/
  const handleMoviesSubmit = (query, checkboxState) => {
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));

    const filteredMovies = movieFilter(query, checkboxState, allMovies);

    setFilteredMovies(filteredMovies);
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  };

  /*Логика поиска фильмов на странице /saved-movies*/
  const handleSavedMoviesSubmit = (query, checkboxState) => {
    const savedMoviesLs = JSON.parse(localStorage.getItem('savedMovies'));

    const filteredSavedMovies = movieFilter(
      query,
      checkboxState,
      savedMoviesLs
    );

    setSavedMovies(filteredSavedMovies);
  };

  /*Логика добавления фильма в сохраненные*/
  const handleSaveMovie = ({
    duration,
    trailerLink,
    image,
    id,
    nameRU,
    nameEN,
  }) => {
    MainApi.saveMovie({
      duration,
      trailerLink,
      image: { url: image.url },
      id,
      nameRU,
      nameEN,
    })
      .then((savedMovie) => {
        const savedMoviesLs = JSON.parse(localStorage.getItem('savedMovies'));
        const allMovies = JSON.parse(localStorage.getItem('allMovies'));

        const newAllMovies = allMovies.map((movie) => {
          if (movie.id === savedMovie.id) {
            movie.saved = true;
          }
          return movie;
        });

        const newFilteredMovies = filteredMovies.map((filteredMovie) => {
          if (filteredMovie.id === savedMovie.id) {
            filteredMovie.saved = true;
          }
          return filteredMovie;
        });

        localStorage.setItem(
          'filteredMovies',
          JSON.stringify(newFilteredMovies)
        );
        localStorage.setItem('allMovies', JSON.stringify(newAllMovies));
        localStorage.setItem(
          'savedMovies',
          JSON.stringify([...savedMoviesLs, savedMovie])
        );
        setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
        setFilteredMovies(newFilteredMovies);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };

  /*Логика удаления фильма из сохраненных*/
  const handleRemoveMovie = (movieId) => {
    MainApi.removeMovie(movieId)
      .then((removedMovie) => {
        const savedMoviesLs = JSON.parse(localStorage.getItem('savedMovies'));
        const allMovies = JSON.parse(localStorage.getItem('allMovies'));

        const newSavedMovies = savedMoviesLs.filter((savedMovieLs) => {
          return savedMovieLs.id !== removedMovie.id;
        });

        const newAllMovies = allMovies.map((movie) => {
          if (movie.id === removedMovie.id) {
            movie.saved = false;
          }
          return movie;
        });

        const newFilteredMovies = filteredMovies.map((filteredMovie) => {
          if (filteredMovie.id === removedMovie.id) {
            filteredMovie.saved = false;
          }
          return filteredMovie;
        });

        localStorage.setItem(
          'filteredMovies',
          JSON.stringify(newFilteredMovies)
        );
        localStorage.setItem('allMovies', JSON.stringify(newAllMovies));
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
        setSavedMovies(newSavedMovies);
        setFilteredMovies(newFilteredMovies);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                handleSaveMovie={handleSaveMovie}
                handleRemoveMovie={handleRemoveMovie}
                handleSubmit={handleMoviesSubmit}
                filteredMovies={filteredMovies}
                component={Movies}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                handleSaveMovie={handleSaveMovie}
                handleRemoveMovie={handleRemoveMovie}
                handleSubmit={handleSavedMoviesSubmit}
                savedMovies={savedMovies}
                component={SavedMovies}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                onEditProfile={handleEditProfile}
                onSignOut={handleSignOut}
                tipText={tipTextProfile}
                component={Profile}
              />
            }
          />
          <Route
            path='/signin'
            element={<ProtectedRoute isLoggedIn={!isLoggedIn} onSignIn={handleSignIn} tipText={tipTextSignIn} component={SignIn} />}
          />
          <Route
            path='/signup'
            element={<ProtectedRoute isLoggedIn={!isLoggedIn} onSignUp={handleSignUp} tipText={tipTextSignUp} component={SignUp} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
