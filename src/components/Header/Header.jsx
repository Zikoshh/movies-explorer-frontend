import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css';

const Header = ({ isLoggedIn }) => {
  const [isNavPopupOpen, setIsNavPopupOpen] = useState(false);
  const [isTryingToAuth, setIsTryingToAuth] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const location = useLocation();

  const handleWindowResize = () => {
    setTimeout(() => setWindowSize(getWindowSize()), 200);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    if (location.pathname === '/signin') {
      setIsTryingToAuth(true);
    }

    if (location.pathname === '/signup') {
      setIsTryingToAuth(true);
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [location]);

  const handleOpenNavPopup = () => {
    setIsNavPopupOpen(true);
  };

  const handleCloseNavPopup = () => {
    setIsNavPopupOpen(false);
  };

  return (
    <div className={`header ${isTryingToAuth ? 'header_auth' : ''}`}>
      <NavLink
        className={`header__logo ${isTryingToAuth ? 'header__logo_auth' : ''}`}
        to='/'
      />
      {isTryingToAuth ? (
        ''
      ) : isLoggedIn ? (
        windowSize.width > 768 ? (
          <div>
            <NavLink
              to='/movies'
              className={({ isActive }) =>
                isActive
                  ? 'header__link header__link_active header__link_movies'
                  : 'header__link header__link_movies'
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to='/saved-movies'
              className={({ isActive }) =>
                isActive ? 'header__link header__link_active' : 'header__link'
              }
            >
              Сохраненные фильмы
            </NavLink>
          </div>
        ) : (
          ''
        )
      ) : (
        <div>
          <NavLink to='/signup' className='header__link header__link_register'>
            Регистрация
          </NavLink>
          <NavLink to='/signin' className='header__link header__link_login'>
            Войти
          </NavLink>
        </div>
      )}
      {isTryingToAuth ? (
        ''
      ) : isLoggedIn ? (
        windowSize.width > 768 ? (
          <NavLink
            to='/profile'
            className={({ isActive }) =>
              isActive
                ? 'header__link header__link_profile header__link_active'
                : 'header__link header__link_profile'
            }
          >
            Аккаунт
          </NavLink>
        ) : (
          <button
            className='header__btn-burger'
            type='button'
            onClick={handleOpenNavPopup}
          ></button>
        )
      ) : (
        ''
      )}
      <div
        className={`header__nav ${isNavPopupOpen ? 'header__nav_opened' : ''}`}
      >
        <div className='header__container'>
          <button
            className='header__btn-close'
            type='button'
            onClick={handleCloseNavPopup}
          ></button>
          <div className='header__links'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'header__link header__link_active' : 'header__link'
              }
            >
              Главная
            </NavLink>
            <NavLink
              to='/movies'
              className={({ isActive }) =>
                isActive
                  ? 'header__link header__link_active header__link_movies'
                  : 'header__link header__link_movies'
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to='/saved-movies'
              className={({ isActive }) =>
                isActive ? 'header__link header__link_active' : 'header__link'
              }
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <NavLink
            to='/profile'
            className={({ isActive }) =>
              isActive
                ? 'header__link header__link_profile header__link_active'
                : 'header__link header__link_profile'
            }
          >
            Аккаунт
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const getWindowSize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

export default Header;
