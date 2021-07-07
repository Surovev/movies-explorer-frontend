import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

function SavedMovies (props) {
  const deleteBtn = (
    <div className='movie__button-delete'>
      <button className='btn btn_type_delete' />
    </div>);

  return (
    <div className='savied-movies'>
      <Header />
      <SearchForm />
      <MoviesCardList
        movies={props.movies}
        setMovies={props.setMovies}
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
