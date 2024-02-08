import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/index';
import { useState, useEffect } from 'react';

const MoviesCardList = ({ movies, displayMovieCount }) => {
  const [displayMovieList, setDisplayMovieList] = useState([]);

  useEffect(() => {
    setDisplayMovieList(() => {
      return movies.slice(0, displayMovieCount);
    });
  }, [movies, displayMovieCount]);

  return (
    <section className='cards'>
      {displayMovieList.map((movie) => {
        return <MoviesCard key={movie.id} movie={movie} isMovieSaved={false} />;
      })}
    </section>
  );
};

export default MoviesCardList;
