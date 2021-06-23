import logo from '../../images/header-logo.svg';
import profileIcon from '../../images/profile-icon.svg';

// <props.Navigation />

function Header (props) {
  const headerClassName = `header ${props.auth ? 'header_type_auth' : ''}`;

  return (<header className={headerClassName}>
    <img className='header__logo' src={logo} alt='логотип' />
    <div className='header__info'>

      <div className='header__user-info hidden'>
        <a href='#' className='header__link'>Аккаунт</a>
        <div className='header__user-icon-wrap'>
          <img className='header__user-icon' src={profileIcon} alt='user icon' />
        </div>
      </div>
      <div className='header__auth'>
        <button className='btn btn_type_auth'>Регистрация</button>
        <button className='btn btn_type_auth'>Войти</button>
      </div>
    </div>
          </header>);
}

export default Header;
