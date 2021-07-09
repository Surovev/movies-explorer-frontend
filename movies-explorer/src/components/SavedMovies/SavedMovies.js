import React, { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { getSavedMovies } from '../../utils/MainApi.js';

function SavedMovies (props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [movies, setMovies] = React.useState([]);
  const [shortFilms, setShortFilms] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');


  useEffect(() => {
    getSavedMovies().then((data) => {
      const myMovies = [];
      data.map((item) => {
        if (item.owner === currentUser._id) {
          myMovies.push(item);
        } else {

        }
      });
      console.log(myMovies);
      setMovies(myMovies);
    }).catch(err => console.log(err));
  }, []);

  const filtered = movies.filter(item => {
    return item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) && (!shortFilms || item.duration <= 40);
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
        // setMovies={props.setMovies}
        // searchingResult={searchingResult}
        // pageContent={pageContent}
        // btn={deleteBtn}
        // setResultCount={setResultCount}
        // resultCount={resultCount}
      />
      <Footer />
    </div>
  );
}

export default SavedMovies;
