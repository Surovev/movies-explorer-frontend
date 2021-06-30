import { useHistory } from 'react-router-dom';
import logo from '../../images/header-logo.svg';

function Login () {
  const history = useHistory();

  function redirectSignIn () {
    history.push('/sign-in');
  }

  function redirectHome () {
    history.push('/');
  }

  return (
    <div className='register'>
      <img className='form__logo' src={logo} alt='логотип' onClick={redirectHome} />
      <h2 className='form__title'>Добро пожаловать!</h2>
      <form className='forms'>
        <div className='form'>
          <span className='form__desc'>Имя</span>
          <input className='form__input' placeholder='введите имя' type='text' />
          <span className='form__desc form__desc_type_error is-hidden'>Что-то пошло не так</span>
        </div>
        <div className='form'>
          <span className='form__desc'>E-mail</span>
          <input className='form__input' placeholder='введите e-mail' type='email' />
          <span className='form__desc form__desc_type_error is-hidden'>Что-то пошло не так</span>
        </div>
        <div className='form'>
          <span className='form__desc'>Пароль</span>
          <input className='form__input form__input_type_error' placeholder='введите пароль' type='password' />
          <span className='form__desc form__desc_type_error'>Что-то пошло не так</span>
        </div>
      </form>
      <form className='form-submit'>
        <button className='form-submit__btn'>Зарегистрироваться</button>
        <div className='form-submit__redirect'>
          <span className='form-submit__redirect-desc'>Уже зарегистрированы?</span>
          <span className='form-submit__redirect-link' onClick={redirectSignIn}>Войти</span>
        </div>
      </form>
    </div>
  );
}

export default Login;
