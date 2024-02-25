const regCheckLatinAlph = /^ [a-zA-Z0-9] + $ /u;

const movieFilter = (query, isShortMovies, movieList) => {
  if (isShortMovies) {
    const shortMovieList = movieList.filter((movie) => {
      return movie.duration <= 40;
    });

    return shortMovieList.filter((movie) => {
      if (query.match(regCheckLatinAlph)) {
        return movie.nameEN.toLowerCase().includes(query.toLowerCase());
      } else {
        return movie.nameRU.toLowerCase().includes(query.toLowerCase());
      }
    });
  } else {
    return movieList.filter((movie) => {
      if (query.match(regCheckLatinAlph)) {
        return movie.nameEN.toLowerCase().includes(query.toLowerCase());
      } else {
        return movie.nameRU.toLowerCase().includes(query.toLowerCase());
      }
    });
  }
};

export default movieFilter;
