import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import getInitialMovies from '../../utils/MoviesApi.js';

import React, { useState } from 'react';

function Movies (props) {
  const [shortFilms, setShortFilms] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [isLiked, setIsLiked] = React.useState(false);
  const movieLikeButtonClassName = `btn btn_type_like ${isLiked ? 'is-active' : ''}`;

  const likeBtn = (
    <div className='movie__button-like' onClick={toggleLike}>
      <button className={movieLikeButtonClassName} />
    </div>
  );

  function toggleLike () {
    if (isLiked === false) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }

  if (movies.length === 0) {
    getInitialMovies().then(data => setMovies(data)).catch((error) => {
      console.log(error);
    });
  }

  let filtered = [];
  if (searchQuery !== '') {
    filtered = movies.filter(item => {
      return item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) && (!shortFilms || item.duration <= 40);
    });
  }

  // function handleSearch (query, shortOnly) {
  //   getInitialMovies().then((data) => {
  //     props.setMovies(data);

  //   }).then(() => {
  //     setMovies(props.movies.filter(item => {
  //       // if (!shortFilms) {
  //       return item.nameRU.toLowerCase().includes(values.film.toLowerCase());
  //       // }
  //       // if (shortFilms) {
  //       //   return item.nameRU.toLowerCase().includes(values.film.toLowerCase()) && item.duration <= 40;
  //       // } else {
  //       //   return console.log('чет сломалось');
  //       // }
  //     }));
  //   })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   const movies = handleSearch(query, shortFilms);

  //   console.log(props.searchingResult);
  // }

  //   React.useEffect(() => {
  //     getInitialMovies().then((data) => {
  //       props.setMovies(data);
  //       console.log('фильмы = ' + props.movies);
  //     })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  // const movies = shortFilms ? searchingResult.slice(0, resultCount).filter(item => item.duration <= 40) : searchingResult.slice(0, resultCount);

  return (
    <div className='movies'>
      <Header authUser={props.authUser} />
      <SearchForm
        setShortFilms={setShortFilms}
        setSearchQuery={setSearchQuery}
      />
      <MoviesCardList
        movies={filtered}
        btn={likeBtn}
      />
      <Footer />
    </div>
  );
}

export default Movies;
