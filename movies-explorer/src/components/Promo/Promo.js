import logo from '../../images/promo-logo.svg';
import profileIcon from '../../images/profile-icon.svg';

function Promo () {
  return (
    <div className='promo'>
      <div className='promo__header'>
        <img className='promo__logo' src={logo} alt='логотип' />
        <div className='promo__info'>

          <div className='promo__user-info hidden'>
            <a href='#' className='promo__link'>Аккаунт</a>
            <div className='promo__user-icon-wrap'>
              <img className='promo__user-icon' src={profileIcon} alt='user icon' />
            </div>
          </div>
          <div className='promo__auth'>
            <button className='btn btn_type_auth'>Регистрация</button>
            <button className='btn btn_type_auth'>Войти</button>
          </div>
        </div>
      </div>
      <div className='promo__main'>
        <h3 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h3>
      </div>
      <nav className='promo__nav-bar'>
        <div className='promo__nav-wrap'>
          <a className='promo__nav-link' href='#'>О проекте</a>
          <a className='promo__nav-link' href='#'>Технологии</a>
          <a className='promo__nav-link' href='#'>Студент</a>
        </div>
      </nav>
    </div>
  );
}

export default Promo;
