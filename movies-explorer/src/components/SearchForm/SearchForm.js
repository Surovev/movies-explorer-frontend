import React, { useState } from 'react';

import Tumb from '../Tumb/Tumb.js';

function SearchForm () {
  const [value, setValue] = useState(false);
  return (
    <div className='search-form'>
      <div className='search-form__input-wrap'>
        <input className='search-form__input' type='text' placeholder='Фильм' required />
        <button className='search-form__submit-btn'>Найти</button>
      </div>
      <div className='search-form__check-box'>
        <Tumb
          isOn={value}
          handleToggle={() => setValue(!value)}
        />
        <label className='search-form__tumb-label'>Короткометражки</label>

      </div>
    </div>
  );
}

export default SearchForm;
