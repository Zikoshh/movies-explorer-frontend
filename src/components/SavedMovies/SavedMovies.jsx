import './SavedMovies.css';
import SearchForm from '../SearchForm/index';
import MoviesCardList from '../MoviesCardList/index';

const SavedMovies = () => {
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList />
    </section>
  )
};

export default SavedMovies;