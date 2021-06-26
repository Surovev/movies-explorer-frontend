import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

function SavedMovies () {
  return (
    <div className='savied-movies'>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default SavedMovies;
