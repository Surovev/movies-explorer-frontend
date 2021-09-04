import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import getInitialMovies from '../../utils/MoviesApi.js';
import { getSavedMovies } from '../../utils/MainApi.js';

import React, { useEffect, useRef, useState } from 'react';

function Movies (props) {
  const [movies, setMovies] = useState([]);
  let filtered = [];
  const loaded = useRef();
  let errorText = ' ';
  const shortFilmLength = 40;

  const loaderSwitchOff = () => {
    props.setLoading(false)
  }

  const processMovies = (movies) => {
    getSavedMovies().then(data => {
      props.setLoading(true);
      const savedIds = data.map(movie => parseInt(movie.movieId));
      movies.forEach(movie => {
        movie.saved = savedIds.includes(movie.id);
      });
      setMovies(movies);
      setTimeout(loaderSwitchOff , 300)
      
    }).catch(err => console.log(err));
  };

  useEffect(() => {
    if (props.searchQuery !== '' && !loaded.current) {
      loaded.current = true;

      try {
        const saved = window.localStorage.getItem('MOVIES');
        if (saved) {
          processMovies(JSON.parse(saved));
          return;
        }
      } catch (e) {} // json parse error
      getInitialMovies().then(data => { window.localStorage.setItem('MOVIES', JSON.stringify(data)); processMovies(data); }).catch((err) => {
        console.log(err);
        errorText = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
      });
    }
  }, [props.searchQuery]);

  if (props.searchQuery !== '') {
    filtered = movies.filter(item => {
      return item.nameRU.toLowerCase().includes(props.searchQuery.toLowerCase()) && (!props.shortFilms || item.duration <= shortFilmLength);
    });
    if (filtered.length === 0) {
      errorText = 'Ничего не найдено';
    }
  }

  if (props.searchQuery === '') {
    filtered = movies.filter(item => {
      return  !props.shortFilms || item.duration <= shortFilmLength;
    });
    if (filtered.length === 0) {
      errorText = 'Ничего не найдено';
      
    }
  }

  return (
    <div className='movies'>
      <Header authUser={props.authUser} />
      <SearchForm
        setShortFilms={props.setShortFilms}
        setSearchQuery={props.setSearchQuery}
        searchQuery={props.searchQuery}
        shortFilms={props.shortFilms}

      />
      {filtered.length !== 0 && errorText !== ''
        ? <MoviesCardList
          savedMovies={props.savedMovies}
          movies={filtered}
        />
        : <h3 className='movies-card-list__error'>{errorText}</h3>}
      <Footer />
    </div>
  );
}

export default Movies;
