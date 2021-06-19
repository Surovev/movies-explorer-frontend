
import '../../index.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function App () {
  return (
    <div className='page__content'>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <div className='openspace' />
      <Footer />
    </div>
  );
}

export default App;
