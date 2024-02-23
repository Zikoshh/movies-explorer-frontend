import './Movies.css';
import SearchForm from '../SearchForm/index';
import MoviesCardList from '../MoviesCardList/index';

const Movies = ({
  handleSaveMovie,
  handleRemoveMovie,
  handleSubmit,
  handleCheckbox,
  formToBeDisabled,
  filteredMovies,
}) => {
  return (
    <section className='movies'>
      <SearchForm
        onSubmit={handleSubmit}
        handleCheckbox={handleCheckbox}
        formToBeDisabled={formToBeDisabled}
      />
      <MoviesCardList
        handleSaveMovie={handleSaveMovie}
        handleRemoveMovie={handleRemoveMovie}
        movies={filteredMovies}
      />
    </section>
  );
};

export default Movies;
