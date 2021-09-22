import React, { useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { getSavedMovies } from '../../utils/MainApi.js';

function SavedMovies (props) {
  const [shortFilms, setShortFilms] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const shortFilmLength = 40;

  useEffect(() => {
    getSavedMovies().then((data) => {
      props.setMyMovies(data);
    }).catch(err => console.log(err));
  }, []);

  const filtered = props.myMovies.filter(item => {
    return item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) && (!shortFilms || item.duration <= shortFilmLength);
  });

  return (
    <div className='savied-movies'>
      <Header />
      <SearchForm
        setShortFilms={setShortFilms}
        setSearchQuery={setSearchQuery}
      />
      <MoviesCardList
        savedMovies={props.savedMovies}
        movies={filtered}

      />
      <Footer />
    </div>
  );
}

export default SavedMovies;
