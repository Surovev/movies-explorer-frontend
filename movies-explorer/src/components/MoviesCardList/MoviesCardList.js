import film from '../../images/film.jpg';

function MoviesCardList () {
  return (
    <div classList='movies-card-list'>
      <div classList='film'>
        <img classList='img' src={film} />
      </div>
      <div classList='film'>
        <img classList='img' src={film} />
      </div>
      <div classList='film'>
        <img classList='img' src={film} />
      </div>
      <div classList='film'>
        <img classList='img' src={film} />
      </div>
      <div classList='film'>
        <img classList='img' src={film} />
      </div>
      <div classList='film'>
        <img classList='img' src={film} />
      </div>
      <div classList='film'>
        <img classList='img' src={film} />
      </div>
    </div>
  );
}

export default MoviesCardList;
