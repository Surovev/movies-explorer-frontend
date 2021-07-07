
import React from 'react';

const Tumb = ({ onChange }) => {
  return (
    <>
      <input
        onInput={(evt) => onChange(evt.target.checked)}
        className='tumb-checkbox'
        id='tumb-new'
        type='checkbox'
      />
      <label
        style={{ background: false && '#06D6A0' }}
        className='tumb-label'
        htmlFor='tumb-new'
      >
        <span className='tumb-button' />
      </label>
    </>
  );
};

export default Tumb;
