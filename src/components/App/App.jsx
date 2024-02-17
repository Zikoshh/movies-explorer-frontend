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

const App = () => {
  const userId = localStorage.getItem('userId');
  const [isLoggedIn, setIsLoggedIn] = useState(userId ? true : false);
  const [currentUser, setCurrentUser] = useState({});
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [tipTextSignIn, setTipTextSignIn] = useState('');
  const [tipTextSignUp, setTipTextSignUp] = useState('');
  const [tipTextProfile, setTipTextProfile] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let debounce = '';

    const handleWindowResize = () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        setWindowSize(getWindowSize());
      }, 200);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize.width]);

  useEffect(() => {
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
  }, []);

  const handleSignOut = () => {
    MainApi.signOut()
      .then(() => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate('/');
        setCurrentUser({});
      })
      .catch((error) => {
        console.log(error);
        setIsLoggedIn(true);
      });
  };

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

  const handleEditProfile = (userInfo) => {
    MainApi.updateUserInfo(userInfo)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch(({ message }) => {
        setTipTextProfile(message);
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
              <ProtectedRoute isLoggedIn={isLoggedIn} component={Movies} />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn} component={SavedMovies} />
            }
          />
          <Route
            path='/profile'
            element={
              <Profile
                onEditProfile={handleEditProfile}
                onSignOut={handleSignOut}
                tipText={tipTextProfile}
              />
            }
          />
          <Route
            path='/signin'
            element={<SignIn onSignIn={handleSignIn} tipText={tipTextSignIn} />}
          />
          <Route
            path='/signup'
            element={<SignUp onSignUp={handleSignUp} tipText={tipTextSignUp} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
};

const getWindowSize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

export default App;
