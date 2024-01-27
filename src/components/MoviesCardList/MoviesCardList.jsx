import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/index';

const MoviesCardList = () => {
  return (
    <section className='cards'>
      <MoviesCard isMovieSaved={true}/>
      <MoviesCard isMovieSaved={true}/>
      <MoviesCard isMovieSaved={true}/>
      <MoviesCard isMovieSaved={false}/>
      <MoviesCard isMovieSaved={false}/>
      <MoviesCard isMovieSaved={false}/>
    </section>
  );
};

export default MoviesCardList;
