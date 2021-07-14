import React from 'react';
import { addMovie, deleteMovie } from '../../utils/MainApi.js';

function Movie ({
  savedMovies,
  movie,
  image
}) {
  const [isLiked, setIsLiked] = React.useState(movie.saved);
  const movieLikeButtonClassName = `btn btn_type_like ${isLiked ? 'is-active' : ''}`;
  const [deleted, setDeleted] = React.useState(false);

  const likeBtn = (
    <div className='movie__button-like' onClick={toggleLike}>
      <button className={movieLikeButtonClassName} />
    </div>
  );

  const deleteBtn = (
    <div className='movie__button-delete' onClick={toggleDelete}>
      <button className='btn btn_type_delete' />
    </div>);

  function toggleLike () {
    if (isLiked === false) {
      addMovie(movie).then(data => setIsLiked(true)).catch(error => console.log(error));
    } else {
      deleteMovie(movie.id).then(data => { console.log(data); setIsLiked(false); }).catch(error => console.log(error));
    }
  }

  function toggleDelete () {
    deleteMovie(movie.movieId).then(data => { console.log(data); setDeleted(true); }).catch(error => console.log(error));
  }
  if (deleted) { return false; }
  return (
    <div className='movie'>
      <a className='movie__trailer-link' href={movie.trailerLink} />
      <img className='movie__img' alt='movie' src={`${!savedMovies ? ' https://api.nomoreparties.co' + image : movie.image}`} />
      <div className='movie__bottom-part'>
        <p className='movie__subtitle'>{movie.nameRU}</p>
        {savedMovies ? deleteBtn : likeBtn}
      </div>
      <p className='movie__duration'>{movie.duration}m</p>
    </div>
  );
}

export default Movie;
