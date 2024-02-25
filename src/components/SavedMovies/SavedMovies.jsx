import './SavedMovies.css';
import SearchForm from '../SearchForm/index';
import MoviesCardList from '../MoviesCardList/index';

const SavedMovies = ({
  handleSaveMovie,
  handleRemoveMovie,
  handleSubmit,
  handleCheckbox,
  formToBeDisabled,
  savedMovies,
}) => {
  return (
    <section className='saved-movies'>
      <SearchForm
        onSubmit={handleSubmit}
        handleCheckbox={handleCheckbox}
        formToBeDisabled={formToBeDisabled}
      />
      <MoviesCardList
        handleSaveMovie={handleSaveMovie}
        handleRemoveMovie={handleRemoveMovie}
        movies={savedMovies}
      />
    </section>
  );
};

export default SavedMovies;
