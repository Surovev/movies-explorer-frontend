import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Tumb from '../Tumb/Tumb.js';

function SearchForm ({ setShortFilms, setSearchQuery }) {
  const { register, handleSubmit, formState: { isSubmitting, isDirty, isValid, errors } } = useForm({ mode: 'onChange' });

  const submitButtonClassName = `search-form__submit-btn ${!isDirty || !isValid ? 'search-form__submit-btn_disabled' : ''}`;

  const validators = {
    required: 'Нужно ввести ключевое слово'
  };

  return (
    <div className='search-form'>
      <form className='search-form__input-wrap' onSubmit={handleSubmit((data) => { setSearchQuery(data.film); })}>
        <input
          name='film' className='search-form__input' type='text' placeholder='Фильм'
          {...register('film', {
            ...validators
          })}
        />
        {errors.film && (<span className='search-form__error'>{errors.film.message}</span>)}
        <button type='submit' disabled={!isDirty || !isValid} className={submitButtonClassName}>Найти</button>
      </form>
      <div className='search-form__check-box'>
        <Tumb
          onChange={setShortFilms}
        />
        <label className='search-form__tumb-label'>Короткометражки</label>

      </div>
    </div>
  );
}

export default SearchForm;
