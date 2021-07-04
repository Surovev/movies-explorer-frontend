import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useHistory, Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';

function Register (props) {
  const { register, handleSubmit, formState: { isSubmitting, isDirty, isValid, errors } } = useForm({ mode: 'onChange' });

  const submitButtonClassName = `form-submit__btn ${!isDirty || !isValid ? 'form-submit__btn_disabled' : ''}`;

  async function onSubmit (values) {
    console.log(values);

    props.onRegister({
      name: values.name,
      password: values.password,
      email: values.email
    })
      .catch(message =>
        console.log(message)
      );
  }

  const history = useHistory();

  function redirectSignIn () {
    history.push('/sign-in');
  }

  function redirectHome () {
    history.push('/');
  }

  const validators = {
    required: 'Не может быть пустым'
  };

  return (
    <div className='register'>
      <img className='form__logo' src={logo} alt='логотип' onClick={redirectHome} />
      <h2 className='form__title'>Добро пожаловать!</h2>
      <form className='forms'>
        <div className='form'>
          <span className='form__desc'>Имя</span>
          <input
            name='name' className='form__input' placeholder='введите имя' type='text'
            {...register('name', {
              ...validators,
              minLength: {
                value: 2,
                message: 'Не менее двух букв'
              },
              maxLength: {
                value: 30,
                message: 'Не более 30 букв'
              }
            })}
          />
          {errors.name && (<span className='form__desc form__desc_type_error'>{errors.name.message}</span>)}
        </div>
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
            name='password' className='form__input form__input_type_error' placeholder='введите пароль' type='password'
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
        <button type='submit' disabled={!isDirty || !isValid} className={submitButtonClassName} onClick={handleSubmit(onSubmit)}>Зарегистрироваться</button>
        <div className='form-submit__redirect'>
          <span className='form-submit__redirect-desc'>Уже зарегистрированы?</span>
          <span className='form-submit__redirect-link' onClick={redirectSignIn}>Войти</span>
        </div>
      </form>
    </div>
  );
}

export default Register;
