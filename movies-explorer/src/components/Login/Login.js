import React from 'react';
import { useForm } from 'react-hook-form';

import { useHistory } from 'react-router-dom';

import logo from '../../images/header-logo.svg';

function Login (props) {
  const { register, handleSubmit, formState: { isDirty, isValid, errors } } = useForm({ mode: 'onChange' });

  const submitButtonClassName = `form-submit__btn ${!isDirty || !isValid ? 'form-submit__btn_disabled' : ''}`;

  const history = useHistory();

  function redirectSignUp () {
    history.push('/sign-up');
  }

  function redirectHome () {
    history.push('/');
  }

  const validators = {
    required: 'Не может быть пустым'
  };

  async function onSubmit (values) {
    console.log(values);

    props.onLogin({
      password: values.password,
      email: values.email
    });
  }

  return (
    <div className='login'>
      <img className='form__logo' src={logo} alt='логотип' onClick={redirectHome} />
      <h2 className='form__title'>Рады видеть!</h2>
      <form className='forms'>
        <div className='form'>
          <span className='form__desc'>E-mail</span>
          <input
            name='email' className='form__input' placeholder='введите e-mail' type='email'
            {...register('email', {
              ...validators,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Неправильный адрес электронной почты'
              }
            })}
          />
          {errors.email && (<span className='form__desc form__desc_type_error'>{errors.email.message}</span>)}
        </div>
        <div className='form'>
          <span className='form__desc'>Пароль</span>
          <input
            name='password' className='form__input' placeholder='введите пароль' type='password'
            {...register('password', {
              ...validators,
              minLength: {
                value: 8,
                message: 'Не менее восьми символов'
              }
            })}
          />
          {errors.password && (<span className='form__desc form__desc_type_error'>{errors.password.message}</span>)}
        </div>
      </form>
      <form className='form-submit'>
        <p className='form__response-error'>{props.errorMessage}</p>
        <button type='submit' disabled={!isDirty || !isValid} className={submitButtonClassName} onClick={handleSubmit(onSubmit)}>Войти</button>
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
