import React from 'react';
import { addMovie, deleteMovie } from '../../utils/MainApi.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movie (props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [isLiked, setIsLiked] = React.useState(props.movie.owner === currentUser._id);
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
      addMovie(props.movie).then(data => setIsLiked(true)).catch(error => console.log(error));
    } else {
      deleteMovie(props.movie.id).then(data => { console.log(data); setIsLiked(false); }).catch(error => console.log(error));
    }
  }

  function toggleDelete () {
    deleteMovie(props.movie.movieId).then(data => { console.log(data); setDeleted(true); }).catch(error => console.log(error));
  }
  if (deleted) { return false; }
  return (
    <div className='movie'>
      <a className='movie__trailer-link' href={props.link} />
      <img className='movie__img' alt='movie' src={`${!props.savedMovies ? ' https://api.nomoreparties.co' + props.image : props.movie.image}`} />
      <div className='movie__bottom-part'>
        <p className='movie__subtitle'>{props.nameRU}</p>
        {props.savedMovies ? deleteBtn : likeBtn}
      </div>
      <p className='movie__duration'>{props.duration}m</p>
    </div>
  );
}

export default Movie;
