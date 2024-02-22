import './Movies.css';
import SearchForm from '../SearchForm/index';
import MoviesCardList from '../MoviesCardList/index';

const Movies = ({
  handleSaveMovie,
  handleRemoveMovie,
  handleSubmit,
  formToBeDisabled,
  filteredMovies,
}) => {
  return (
    <section className='movies'>
      <SearchForm onSubmit={handleSubmit} formToBeDisabled={formToBeDisabled} />
      <MoviesCardList
        handleSaveMovie={handleSaveMovie}
        handleRemoveMovie={handleRemoveMovie}
        movies={filteredMovies}
      />
    </section>
  );
};

export default Movies;
