import { NavLink } from 'react-router-dom';
import './Profile.css';
import { useEffect, useRef, useState } from 'react';

const Profile = ({ onSignOut }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);

  useEffect(() => {}, []);

  const handleEditInfo = () => {
    setIsEditButtonClicked(true);
    inputNameRef.current.removeAttribute('disabled');
    inputEmailRef.current.removeAttribute('disabled');
    inputNameRef.current.focus();
  };

  return (
    <section className='profile'>
      <form className='profile__form'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <label className='profile__label'>
          Имя
          <input
            name='name'
            ref={inputNameRef}
            className='profile__input'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled
          />
        </label>
        <label className='profile__label'>
          Почта
          <input
            name='email'
            ref={inputEmailRef}
            className='profile__input'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
        </label>
        {isEditButtonClicked ? (
          <div className='profile__container'>
            <p className='profile__error'>
              При обновлении профиля произошла ошибка.
            </p>
            <button className='profile__submit-button' type='submit'>
              Сохранить
            </button>
          </div>
        ) : (
          <div className='profile__container'>
            <button
              className='profile__edit-button'
              type='button'
              onClick={handleEditInfo}
            >
              Редактировать
            </button>
            <NavLink className='profile__sign-out' to='/' onClick={onSignOut}>
              Выйти из аккаунта
            </NavLink>
          </div>
        )}
      </form>
    </section>
  );
};

export default Profile;
