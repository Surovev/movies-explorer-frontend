import logo from '../../images/header-logo.svg';
import profileIcon from '../../images/profile-icon.svg';
import Navigation from '../Navigation/Navigation';
function Header () {
  return (<header className='header'>
    <img className='header__logo' src={logo} alt='логотип' />
    <div className='header__info'>
      <Navigation />
      <div className='header__user-info'>
        <a href='#' className='header__link'>Аккаунт</a>
        <div className='header__user-icon-wrap'>
          <img className='header__user-icon' src={profileIcon} alt='user icon' />
        </div>
      </div>
    </div>
          </header>);
}

export default Header;
