import { useHistory } from 'react-router-dom';

import logo from '../../images/promo-logo.svg';
import profileIcon from '../../images/profile-icon.svg';

function Promo () {
  const history = useHistory();

  function redirectSignIn () {
    history.push('/sign-in');
  }

  function redirectSignUp () {
    history.push('/sign-up');
  }

  function redirectProfile () {
    history.push('/profile');
  }

  return (
    <div className='promo'>
      <div className='promo__header'>
        <img className='promo__logo' src={logo} alt='логотип' />
        <div className='promo__info'>

          <div className='promo__user-info hidden'>
            <a href='#' className='promo__link' onClick={redirectProfile}>Аккаунт</a>
            <div className='promo__user-icon-wrap'>
              <img className='promo__user-icon' src={profileIcon} alt='user icon' />
            </div>
          </div>
          <div className='promo__auth'>
            <button className='btn btn_type_auth' onClick={redirectSignUp}>Регистрация</button>
            <button className='btn btn_type_auth' onClick={redirectSignIn}>Войти</button>
          </div>
        </div>
      </div>
      <div className='promo__main'>
        <h3 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h3>
        <nav className='promo__nav-bar'>
          <div className='promo__nav-wrap'>
            <a className='promo__nav-link' href='#about-project'>О проекте</a>
            <a className='promo__nav-link' href='#techs'>Технологии</a>
            <a className='promo__nav-link' href='#about-me'>Студент</a>
          </div>
        </nav>
      </div>

    </div>
  );
}

export default Promo;
