import './MoviesCard.css';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ handleSaveMovie, handleRemoveMovie, movie }) => {
  const saveButton = useRef();
  const removeButton = useRef();
  const location = useLocation();

  const showSaveButton = () => {
    saveButton.current.classList.add('card__save-btn_visible');
  };

  const hideSaveButton = () => {
    saveButton.current.classList.remove('card__save-btn_visible');
  };

  const showRemoveButton = () => {
    removeButton.current.classList.add('card__saved-btn_remove');
  };

  const hideRemoveButton = () => {
    removeButton.current.classList.remove('card__saved-btn_remove');
  };

  const getMovieDuration = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}ч ${minutes}м`;
  };

  const onSaveBtnClick = () => {
    handleSaveMovie(movie);
  };

  const onRemoveBtnClick = () => {
    handleRemoveMovie(movie.id);
  };

  return (
    <article
      className='card'
      onMouseEnter={
        (location.pathname === '/saved-movies' ? true : movie.saved)
          ? showRemoveButton
          : showSaveButton
      }
      onMouseLeave={
        (location.pathname === '/saved-movies' ? true : movie.saved)
          ? hideRemoveButton
          : hideSaveButton
      }
    >
      <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img
          className='card__image'
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt={movie.nameRU}
        />
      </a>
      <div className='card__info'>
        <h4 className='card__title'>{movie.nameRU}</h4>
        <span className='card__duration'>
          {movie.duration < 60
            ? `${movie.duration}м`
            : movie.duration === 60
            ? '1ч'
            : getMovieDuration(movie.duration)}
        </span>
      </div>
      {(location.pathname === '/saved-movies' ? true : movie.saved) ? (
        <button
          className='card__saved-btn'
          ref={removeButton}
          onClick={onRemoveBtnClick}
        />
      ) : (
        <button
          className='card__save-btn'
          ref={saveButton}
          onClick={onSaveBtnClick}
        >
          Сохранить
        </button>
      )}
    </article>
  );
};

export default MoviesCard;
