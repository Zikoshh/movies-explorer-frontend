import './Movies.css';
import SearchForm from '../SearchForm/index';
import MoviesCardList from '../MoviesCardList/index';

const Movies = () => {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList />
    </section>
  );
};

export default Movies;
