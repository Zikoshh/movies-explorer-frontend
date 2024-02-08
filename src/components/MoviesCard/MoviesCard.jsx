import './MoviesCard.css';
import { useRef } from 'react';

const MoviesCard = ({ isMovieSaved, movie }) => {
  const saveButton = useRef();
  const savedButton = useRef();

  const showSaveButton = () => {
    saveButton.current.classList.add('card__save-btn_visible');
  };

  const hideSaveButton = () => {
    saveButton.current.classList.remove('card__save-btn_visible');
  };

  const showRemoveButton = () => {
    savedButton.current.classList.add('card__saved-btn_remove');
  };

  const hideRemoveButton = () => {
    savedButton.current.classList.remove('card__saved-btn_remove');
  };

  const getMovieDuration = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}ч ${minutes}м`;
  };

  return (
    <article
      className='card'
      onMouseEnter={isMovieSaved ? showRemoveButton : showSaveButton}
      onMouseLeave={isMovieSaved ? hideRemoveButton : hideSaveButton}
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
      {isMovieSaved ? (
        <button className='card__saved-btn' ref={savedButton} />
      ) : (
        <button className='card__save-btn' ref={saveButton}>
          Сохранить
        </button>
      )}
    </article>
  );
};

export default MoviesCard;
