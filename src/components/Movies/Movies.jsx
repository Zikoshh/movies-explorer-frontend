import './Movies.css';
import SearchForm from '../SearchForm/index';
import MoviesCardList from '../MoviesCardList/index';
import { useEffect, useState } from 'react';
import getMovies from '../../utils/MoviesApi';
import movieFilter from '../../utils/movieFilter';

const Movies = ({
  displayMovieCount,
  onAdditionalButtonClick,
}) => {
  const [initialMovies, setInitialMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isAdditionalButtonToBeHidden, setIsAdditionalButtonToBeHidden] =
    useState(true);

  useEffect(() => {
    getMovies().then((data) => {
      setInitialMovies(data);
    });

    const filteredMoviesInLs = JSON.parse(
      localStorage.getItem('filteredMovies')
    );

    if (filteredMoviesInLs) {
      setMovies(filteredMoviesInLs);

      if (displayMovieCount < movies.length) {
        setIsAdditionalButtonToBeHidden(false);
      } else {
        setIsAdditionalButtonToBeHidden(true);
      }
    }
  }, [displayMovieCount, movies.length]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredMovies = movieFilter(
      e.target.search.value,
      e.target.checkbox.checked,
      initialMovies
    );

    localStorage.setItem(
      'filteredMovies',
      JSON.stringify(filteredMovies)
    );
    setMovies(filteredMovies);
  };

  return (
    <section className='movies'>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesCardList
        movies={movies}
        displayMovieCount={displayMovieCount}
      />
      <button
        className={`movies__btn ${
          isAdditionalButtonToBeHidden ? 'movies__btn_hidden' : ''
        }`}
        type='button'
        onClick={onAdditionalButtonClick}
      >
        Ещё
      </button>
    </section>
  );
};

export default Movies;
