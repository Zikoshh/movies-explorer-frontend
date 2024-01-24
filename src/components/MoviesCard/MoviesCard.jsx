import './MoviesCard.css';
import preview from '../../assets/images/movie-preview.jpg';
import { useRef } from 'react';

const MoviesCard = ({ isMovieSaved }) => {
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

  return (
    <article
      className='card'
      onMouseEnter={isMovieSaved ? showRemoveButton : showSaveButton}
      onMouseLeave={isMovieSaved ? hideRemoveButton : hideSaveButton}
    >
      <img className='card__preview' src={preview} alt='#' />
      <div className='card__info'>
        <h4 className='card__title'>Чивоооооооооо</h4>
        <span className='card__duration'>56ч 99м</span>
      </div>
      {isMovieSaved ? (
        <button className='card__saved-btn' ref={savedButton}/>
      ) : (
        <button className='card__save-btn' ref={saveButton}>
          Сохранить
        </button>
      )}
    </article>
  );
};

export default MoviesCard;
