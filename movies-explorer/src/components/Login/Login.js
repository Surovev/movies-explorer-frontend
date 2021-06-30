import { useHistory } from 'react-router-dom';

import logo from '../../images/header-logo.svg';

function Login () {
  const history = useHistory();

  function redirectSignUp () {
    history.push('/sign-up');
  }

  function redirectHome () {
    history.push('/');
  }

  return (
    <div className='login'>
      <img className='form__logo' src={logo} alt='логотип' onClick={redirectHome} />
      <h2 className='form__title'>Рады видеть!</h2>
      <form className='forms'>
        <div className='form'>
          <span className='form__desc'>E-mail</span>
          <input className='form__input' placeholder='Введите e-mail' type='email' />
          <span className='form__desc form__desc_type_error is-hidden'>Что-то пошло не так</span>
        </div>
        <div className='form'>
          <span className='form__desc'>Пароль</span>
          <input className='form__input form__input_type_error' placeholder='Введите пароль' type='password' />
          <span className='form__desc form__desc_type_error'>Что-то пошло не так</span>
        </div>
      </form>
      <form className='form-submit'>
        <button className='form-submit__btn'>Войти</button>
        <div className='form-submit__redirect'>
          <span className='form-submit__redirect-desc'>Еще не зарегистрированы?</span>
          <span className='form-submit__redirect-link' onClick={redirectSignUp}>Регистрация</span>
        </div>
      </form>
    </div>
  );
}

export default Login
;
