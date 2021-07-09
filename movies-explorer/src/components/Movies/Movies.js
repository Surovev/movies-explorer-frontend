import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import getInitialMovies from '../../utils/MoviesApi.js';
import { getSavedMovies } from '../../utils/MainApi.js';
// import { setUserInfo, addMovie, deleteMovie, getSavedMovies } from '../../utils/MainApi.js';

import React, { useEffect, useRef, useState } from 'react';

function Movies (props) {
  const [shortFilms, setShortFilms] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  let filtered = [];
  const loaded = useRef();
  let errorText = ' ';

  const processMovies = (movies) => {
    getSavedMovies().then(data => {
      props.setLoading(true);
      const savedIds = data.map(movie => parseInt(movie.movieId));
      movies.forEach(movie => {
        movie.saved = savedIds.includes(movie.id);
      });
      setMovies(movies);
      props.setLoading(false);
    }).catch(err => console.log(err));
  };

  useEffect(() => {
    if (searchQuery !== '' && !loaded.current) {
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
  }, [searchQuery]);

  // const renderMovies = () => {
  //   /*
  //     Begin by setting loading = true, and use the callback function
  //     of setState() to make the ajax request. Set loading = false after
  //     the request completes.
  //   */
  //   this.setState({ loading: true }, () => {
  //   });
  // };

  if (searchQuery !== '') {
    props.setLoading(true);
    filtered = movies.filter(item => {
      return item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) && (!shortFilms || item.duration <= 40);
    });
    if (filtered.length === 0) {
      errorText = 'Ничего не найдено';
      props.setLoading(false);
    }
    props.setLoading(false);
  }

  return (
    <div className='movies'>
      <Header authUser={props.authUser} />
      <SearchForm
        setShortFilms={setShortFilms}
        setSearchQuery={setSearchQuery}
      />
      {filtered.length !== 0 && errorText !== '' ? <MoviesCardList
        savedMovies={props.savedMovies}
        movies={filtered}
      /> : <h3 className='movies-card-list__error'>{errorText}</h3>}
      <Footer />
    </div>
  );
}

export default Movies;

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
