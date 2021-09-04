import React from 'react';
import { useForm } from 'react-hook-form';

import Tumb from '../Tumb/Tumb.js';

function SearchForm ({ setShortFilms, setSearchQuery, shortFilms, searchQuery }) {
  const { register, handleSubmit, formState: {errors } } = useForm({ mode: 'onChange' });

  const submitButtonClassName = `search-form__submit-btn`;



  const clearInputHandler = () => {
    // setSearchQuery('');
    handleSubmit((data) => { setSearchQuery(''); })
  }


  return (
    <div className='search-form'>
      <form className='search-form__input-wrap' onSubmit={handleSubmit((data) => { setSearchQuery(data.film); })}>
        <input
          name='film' className='search-form__input' type='text' placeholder='Введите название фильма' defaultValue=''
          {...register('film', {
          })}
        />
        {errors.film && (<span className='search-form__error'>{errors.film.message}</span>)}
        <button className='btn btn_type_clear' onClick={clearInputHandler} />
        <button type='submit' className={submitButtonClassName}>Найти</button>
      </form>
      <div className='search-form__check-box'>
        <Tumb
          onChange={setShortFilms}
          value={shortFilms}
        />
        <label className='search-form__tumb-label'>Короткометражки</label>

      </div>
    </div>
  );
}

export default SearchForm;
