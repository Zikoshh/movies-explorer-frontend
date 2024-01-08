import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css';

const Header = ({ isLoggedIn, isTryingToAuth }) => {
  const [isNavPopupOpen, setIsNavPopupOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleOpenNavPopup = () => {
    setIsNavPopupOpen(true);
  };

  const handleCloseNavPopup = () => {
    setIsNavPopupOpen(false);
  };

  return (
    <div className={`header ${isTryingToAuth && 'header_auth'}`}>
      <NavLink className={`header__logo ${isTryingToAuth && 'header__logo_auth'}`} to='/' />
      {isTryingToAuth ? (
        ''
      ) : isLoggedIn ? (
        windowSize.innerWidth >= 768 ? (
          <div>
            <NavLink
              to='/movies'
              className={({ isActive }) =>
                isActive ? 'header__link_active' : 'header__link'
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to='/saved-movies'
              className={({ isActive }) =>
                isActive ? 'header__link_active' : 'header__link'
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
          <NavLink
            to='/signup'
            className={({ isActive }) =>
              isActive
                ? 'header__link-register-active'
                : 'header__link-register'
            }
          >
            Регистрация
          </NavLink>
          <NavLink
            to='/signin'
            className={({ isActive }) =>
              isActive ? 'header__link-login_active' : 'header__link-login'
            }
          >
            Войти
          </NavLink>
        </div>
      )}
      {isTryingToAuth ? (
        ''
      ) : isLoggedIn ? (
        windowSize.innerWidth >= 768 ? (
          <NavLink
            to='/profile'
            className={({ isActive }) =>
              isActive ? 'header__link-profile_active' : 'header__link-profile'
            }
          >
            Аккаунт
          </NavLink>
        ) : (
          <button
            className='header__button-burger'
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
            className='header__button-close'
            type='button'
            onClick={handleCloseNavPopup}
          ></button>
          <div className='header__links'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'header__link_active' : 'header__link'
              }
            >
              Главная
            </NavLink>
            <NavLink
              to='/movies'
              className={({ isActive }) =>
                isActive ? 'header__link_active' : 'header__link'
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to='/saved-movies'
              className={({ isActive }) =>
                isActive ? 'header__link_active' : 'header__link'
              }
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <NavLink
            to='/profile'
            className={({ isActive }) =>
              isActive ? 'header__link-profile_active' : 'header__link-profile'
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
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

export default Header;
