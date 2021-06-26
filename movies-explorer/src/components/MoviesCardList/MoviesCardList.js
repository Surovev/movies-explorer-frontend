import Movie from '../Movie/Movie.js';

function MoviesCardList () {
  return (
    <div className='movies-card-list'>
      <div className='movies-card-list__wrap'>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
      <button className='btn btn_type_long'>Ещё</button>
    </div>
  );
}

export default MoviesCardList;
