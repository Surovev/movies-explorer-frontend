
import '../../index.css';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';

// <Header Navigation={Navigation} auth='true' />

function App () {
  return (

    <div className='page__content'>
      <Login />
      <Register />
      <Header />
      <Profile />

      <Promo />
      <div className='main'>
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <SearchForm />
        <MoviesCardList />
        <div className='openspace' />
        <Footer />
      </div>
    </div>
  );
}

export default App;
