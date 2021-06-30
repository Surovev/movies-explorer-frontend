import React from 'react';
import Movie from '../Movie/Movie.js';

function MoviesCardList () {
  const [isLiked, setIsLiked] = React.useState(false);
  const movieLikeButtonClassName = `btn btn_type_like ${isLiked ? 'is-active' : ''}`;

  function toggleLike () {
    if (isLiked === false) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }
  return (
    <div className='movies-card-list'>
      <div className='movies-card-list__wrap'>
        <Movie>
          <div className='movie__button-like' onClick={toggleLike}>
            <button className={movieLikeButtonClassName} />
          </div>
        </Movie>
        <Movie>
          <div className='movie__button-delete'>
            <button className='btn btn_type_delete' />
          </div>
        </Movie>
        <Movie>
          <div className='movie__button-delete'>
            <button className='btn btn_type_delete' />
          </div>
        </Movie>
        <Movie>
          <div className='movie__button-delete'>
            <button className='btn btn_type_delete' />
          </div>
        </Movie>
        <Movie>
          <div className='movie__button-like' onClick={toggleLike}>
            <button className={movieLikeButtonClassName} />
          </div>
        </Movie>

      </div>
      <button className='btn btn_type_long'>Ещё</button>
    </div>
  );
}

export default MoviesCardList;
