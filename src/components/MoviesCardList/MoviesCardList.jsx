import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/index';
import { useState, useEffect } from 'react';

const MoviesCardList = ({
  handleSaveMovie,
  handleRemoveMovie,
  movies,
}) => {
  const [moviesDisplay, setMoviesDisplay] = useState([]);
  const [moviesCount, setMoviesCount] = useState('');
  const [numberOfAdditionalMovies, setNumberOfAdditionalMovies] = useState('');
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    setMoviesDisplay(movies.slice(0, moviesCount));
  }, [movies, moviesCount]);

  useEffect(() => {
    let debounce = '';

    const handleWindowResize = () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        setWindowSize(getWindowSize());
      }, 200);
    };

    if (windowSize.width > 768) {
      setMoviesCount(12);
      setNumberOfAdditionalMovies(3);
    }

    if (windowSize.width <= 768) {
      setMoviesCount(8);
      setNumberOfAdditionalMovies(2);
    }

    if (windowSize.width <= 480) {
      setMoviesCount(5);
      setNumberOfAdditionalMovies(2);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize.width]);

  const handleMoreButton = () => {
    setMoviesCount(moviesCount + numberOfAdditionalMovies);
  };

  return (
    <section className='cards'>
      <div
        className={`cards__container ${
          moviesDisplay.length === 0 ? 'cards__container_nothing' : ''
        }`}
      >
        {moviesDisplay.length === 0 ? (
          <h4 className='cards__title'>Ничего не найдено</h4>
        ) : (
          moviesDisplay.map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                handleSaveMovie={handleSaveMovie}
                handleRemoveMovie={handleRemoveMovie}
                movie={movie}
              />
            );
          })
        )}
      </div>
      <button
        className={`cards__btn ${
          moviesCount >= movies.length ? 'cards__btn_hidden' : ''
        }`}
        type='button'
        onClick={handleMoreButton}
      >
        Ещё
      </button>
    </section>
  );
};

const getWindowSize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

export default MoviesCardList;
