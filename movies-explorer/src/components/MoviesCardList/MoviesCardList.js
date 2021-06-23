import film from '../../images/film.jpg';
import React from 'react';

function MoviesCardList () {
  // времееное решение для лайка
  const [isLiked, setIsLiked] = React.useState(false);
  const movieLikeButtonClassName = `btn btn_type_like ${isLiked ? 'is-active' : ''}`;

  function toggleLike () {
    if (isLiked === false) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }

  // времееное решение для лайка

  return (
    <div className='movies-card-list'>
      <div className='movies-card-list__wrap'>
        <div className='movie'>
          <img className='movie__img' src={film} />
          <div className='movie__bottom-part'>
            <p className='movie__subtitle'>33 Коровы и 12 утят гуляют где хотят 33 Коровы и 12 утят гуляют где хотят</p>
            <div className='movie__like' onClick={toggleLike}>
              <button className={movieLikeButtonClassName} />
            </div>
          </div>
          <p className='movie__duration'>1h24m</p>
        </div>

        <div className='movie'>
          <img className='movie__img' src={film} />
          <div className='movie__bottom-part'>
            <p className='movie__subtitle'>33 Коровы и 12 утят</p>
            <div className='movie__like' onClick={toggleLike}>
              <button className={movieLikeButtonClassName} />
            </div>
          </div>
          <p className='movie__duration'>1h24m</p>
        </div>
        <div className='movie'>
          <img className='movie__img' src={film} />
          <div className='movie__bottom-part'>
            <p className='movie__subtitle'>33 Коровы и 12 утят</p>
            <div className='movie__like' onClick={toggleLike}>
              <button className={movieLikeButtonClassName} />
            </div>
          </div>
          <p className='movie__duration'>1h24m</p>
        </div>
        <div className='movie'>
          <img className='movie__img' src={film} />
          <div className='movie__bottom-part'>
            <p className='movie__subtitle'>33 Коровы и 12 утят гуляют где хотят</p>
            <div className='movie__like' onClick={toggleLike}>
              <button className={movieLikeButtonClassName} />
            </div>
          </div>
          <p className='movie__duration'>1h24m</p>
        </div>
        <div className='movie'>
          <img className='movie__img' src={film} />
          <div className='movie__bottom-part'>
            <p className='movie__subtitle'>33 Коровы и 12 утят</p>
            <div className='movie__like' onClick={toggleLike}>
              <button className={movieLikeButtonClassName} />
            </div>
          </div>
          <p className='movie__duration'>1h24m</p>
        </div>
      </div>
      <button className='btn btn_type_long'>Ещё</button>
    </div>
  );
}

export default MoviesCardList;
