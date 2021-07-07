import React from 'react';
import Movie from '../Movie/Movie.js';

function MoviesCardList (props) {
  const [resultCount, setResultCount] = React.useState(4);
  const moreBtnClassName = `btn btn_type_long ${resultCount >= props.movies.length ? 'hidden' : ''}`;
  //   React.useEffect(() => {
  //     getInitialMovies().then((data) => {
  //       props.setMovies(data);
  //       console.log('фильмы = ' + props.movies);
  //     })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  console.log(props);
  const moreResult = 4;
  const moreResultHendler = () => {
    setResultCount(resultCount + moreResult);
  };

  return (
    <div className='movies-card-list'>
      <div className='movies-card-list__wrap'>
        {props.movies.slice(0, resultCount).map(item => (<Movie key={item.id} image={item.image.url} nameRU={item.nameRU} duration={item.duration} children={props.btn} />))}

      </div>
      <button className={moreBtnClassName} onClick={moreResultHendler}>Ещё</button>
    </div>
  );
}

export default MoviesCardList;
