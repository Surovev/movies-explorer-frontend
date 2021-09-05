import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import Tumb from '../Tumb/Tumb.js';

function SearchForm ({ setShortFilms, setSearchQuery, shortFilms, searchQuery }) {
  //const { register, handleSubmit, formState: {errors } } = useForm({ mode: 'onChange' });
  console.log( shortFilms+"||"+searchQuery);
  const searchInput = useRef();

  const submitButtonClassName = `search-form__submit-btn`;



  const clearInputHandler = () => {
    // setSearchQuery(window.localStorage.getItem('SEARCHQUERY'));
    //handleSubmit((data) => { setSearchQuery(window.localStorage.getItem('SEARCHQUERY')); })
    setSearchQuery( '');
    //console.log( searchInput);
    searchInput.current.value = '';
  }

  const handleSubmit = ( evt) => {
    evt.preventDefault();    
    setSearchQuery( searchInput.current.value);
  }


  return (
    <div className='search-form'>
      <form className='search-form__input-wrap' onSubmit={handleSubmit}>
        <input
          name='film' key={searchQuery} ref={searchInput} className='search-form__input' type='text' placeholder='Введите название фильма' defaultValue={searchQuery||''}
          /* {...register('film', {
          })} */
        />
        {/*errors.film && (<span className='search-form__error'>{errors.film.message}</span>) */} 
        <a className='btn btn_type_clear' onClick={clearInputHandler} />
        <button type='submit' className={submitButtonClassName}>Найти</button>
      </form>
      <div className='search-form__check-box'>
        <Tumb
          key={shortFilms}
          onChange={setShortFilms}
          value={shortFilms}
        />
        <label className='search-form__tumb-label'>Короткометражки</label>

      </div>
    </div>
  );
}

export default SearchForm;
