import React from 'react';
import Header from '../Header/Header.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from 'react-hook-form';

function Profile (props) {
  const currentUser = React.useContext(CurrentUserContext);

  const { register, handleSubmit, formState: { isDirty, isValid, errors } } = useForm({ mode: 'onChange' });

  const submitButtonClassName = `profile__link ${!isDirty || !isValid ? 'profile__link_disabled' : ''}`;

  const validators = {
    required: 'Не может быть пустым'

  };

  async function onSubmit (values) {
    console.log(values.name);

    props.handleUpdateUser({
      name: values.name,
      email: values.email
    });
  }

  const loggedOut = () => {
    props.unAutorization();
  };

  return (
    <div className='profile__page'>
      <Header />
      <div className='profile'>

        <h2 className='profile__title'>Привет, {currentUser.name}</h2>
        <div className='profile__info'>
          <div className='profile__info-row'>
            <p className='profile__info-item'>Имя</p>
            <input
              name='name'
              type='text' placeholder={currentUser.name} className=' profile__input'
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
            {errors.name && (<span className='form__desc profile-input-error form__desc_type_error'>{errors.name.message}</span>)}
          </div>
          <div className='profile__info-row'>
            <p className='profile__info-item'>E-mail</p>
            <input
              name='email' type='email' placeholder={currentUser.email} className='profile__input'
              {...register('email', {
                ...validators,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Неправильный адрес электронной почты'
                }
              })}
            />
            {errors.email && (<span className='form__desc profile-input-error form__desc_type_error'>{errors.email.message}</span>)}
          </div>

        </div>
        <div className='profile__links'>
          <button className={submitButtonClassName} disabled={!isDirty || !isValid} onClick={handleSubmit(onSubmit)}>Редактировать</button>
          <p className='profile__link profile__link_is-red' onClick={loggedOut}>Выйти из аккаунта</p>
        </div>
      </div>
    </div>
  );
}

export default Profile
;
