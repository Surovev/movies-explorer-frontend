import React from 'react';
import Movie from '../Movie/Movie.js';
import { useMediaQuery } from 'react-responsive';

function MoviesCardList (props) {
  let firstResult;
  let moreResult;

  if (useMediaQuery({ query: '(min-width: 1279px)' })) {
    if (!props.savedMovies) {
      firstResult = 16;
      moreResult = 4;
    }
  }
  if (useMediaQuery({ query: '(max-width: 1279px)' })) {
    if (!props.savedMovies) {
      firstResult = 12;
      moreResult = 3;
    }
  }
  if (useMediaQuery({ query: '(max-width: 1023px)' })) {
    if (!props.savedMovies) {
      firstResult = 8;
      moreResult = 2;
    }
  }
  if (useMediaQuery({ query: '(max-width: 767px)' })) {
    if (!props.savedMovies) {
      firstResult = 5;
      moreResult = 1;
    }
  }

  const [resultCount, setResultCount] = React.useState(firstResult);
  const moreBtnClassName = `btn btn_type_long ${props.savedMovies || resultCount >= props.movies.length ? 'hidden' : ''}`;

  const moreResultHendler = () => {
    setResultCount(resultCount + moreResult);
  };

  return (
    <div className='movies-card-list'>
      <div className='movies-card-list__wrap'>
        {props.movies.slice(0, resultCount).map(item => (
          <Movie
            setSavedMovies={props.setSavedMovies}
            savedMovies={props.savedMovies}
            movie={item} link={item.trailerLink}
            key={item.id} image={item.image.url}
            nameRU={item.nameRU}
            duration={item.duration}
          />))}

      </div>
      <button className={moreBtnClassName} onClick={moreResultHendler}>Ещё</button>
    </div>
  );
}

export default MoviesCardList;
