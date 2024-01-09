import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Main from '../Main/index';
import Movies from '../Movies/index';
import SavedMovies from '../SavedMovies/index';
import Profile from '../Profile/index';
import Form from '../Form/index';
import NotFound from '../NotFound/index';
import { useEffect, useState } from 'react';

const App = () => {
  const [inputEmailSignIn, setInputEmailSignIn] = useState('');
  const [inputPasswordSignIn, setInputPasswordSignIn] = useState('');
  const [inputNameSignUp, setInputNameSignUp] = useState('');
  const [inputEmailSignUp, setInputEmailSignUp] = useState('');
  const [inputPasswordSignUp, setInputPasswordSignUp] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTryingToAuth, setIsTryingToAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/signin') {
      setIsTryingToAuth(true);
    }

    if (location.pathname === '/signup') {
      setIsTryingToAuth(true);
    }

    
  }, [location]);

  return (
    <div className='page'>
      <Header isLoggedIn={isLoggedIn} isTryingToAuth={isTryingToAuth} />
      <Routes>
        <Route path='/' element={<Main />} />a
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route
          path='/signin'
          element={
            <Form
              handleSubmit={() => {}}
              titleText='Рады видеть!'
              submitButtonText='Войти'
              yetText='Ещё не зарегистрированы?'
              linkText='Регистрация'
              routLink='/signup'
              isSignInForm={true}
            >
              <label className='form__label' htmlFor='signin-email'>
                E-mail
              </label>
              <input
                id='signin-email'
                className='form__input'
                name='email'
                type='text'
                value={inputEmailSignIn}
                onChange={(e) => setInputEmailSignIn(e.target.value)}
              />
              <p className='form__error'>Что-то пошло не так...</p>
              <label className='form__label' htmlFor='signin-password'>
                Пароль
              </label>
              <input
                id='signin-password'
                className='form__input'
                name='password'
                type='text'
                value={inputPasswordSignIn}
                onChange={(e) => setInputPasswordSignIn(e.target.value)}
              />
              <p className='form__error'>Что-то пошло не так...</p>
            </Form>
          }
        />
        <Route
          path='/signup'
          element={
            <Form
              handleSubmit={() => {}}
              titleText='Добро пожаловать!'
              submitButtonText='Зарегистрироваться'
              yetText='Уже зарегистрированы?'
              linkText='Войти'
              routLink='/signin'
              isSignInForm={false}
            >
              <label className='form__label' htmlFor='signup-name'>
                Имя
              </label>
              <input
                id='signup-name'
                className='form__input'
                name='name'
                type='text'
                value={inputNameSignUp}
                onChange={(e) => setInputNameSignUp(e.target.value)}
              />
              <p className='form__error'>Что-то пошло не так...</p>
              <label className='form__label' htmlFor='signup-email'>
                E-mail
              </label>
              <input
                id='signup-email'
                className='form__input'
                name='email'
                type='text'
                value={inputEmailSignUp}
                onChange={(e) => setInputEmailSignUp(e.target.value)}
              />
              <p className='form__error'>Что-то пошло не так...</p>
              <label className='form__label' htmlFor='signup-password'>
                Пароль
              </label>
              <input
                id='signup-password'
                className='form__input'
                name='password'
                type='text'
                value={inputPasswordSignUp}
                onChange={(e) => setInputPasswordSignUp(e.target.value)}
              />
              <p className='form__error'>Что-то пошло не так...</p>
            </Form>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
