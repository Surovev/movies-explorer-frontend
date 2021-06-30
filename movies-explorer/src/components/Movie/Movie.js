import film from '../../images/film.jpg';
import React from 'react';

function Movie (props) {
  return (
    <div className='movie'>
      <img className='movie__img' alt='movie' src={film} />
      <div className='movie__bottom-part'>
        <p className='movie__subtitle'>33 Коровы и 12 утят</p>
        {props.children}
      </div>
      <p className='movie__duration'>1h24m</p>
    </div>
  );
}

export default Movie;

{ /* <button className={movieLikeButtonClassName} /> */ }

{ /* <div className='movie__button-delete' onClick={toggleLike}>
<button className='btn btn_type_delete' />
</div> */ }
