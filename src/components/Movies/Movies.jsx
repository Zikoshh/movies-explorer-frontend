import './Movies.css';
import SearchForm from '../SearchForm/index';
import MoviesCardList from '../MoviesCardList/index';

const Movies = () => {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList />
      <button className='movies__more-btn' type='button'>Ещё</button>
    </section>
  );
};

export default Movies;
