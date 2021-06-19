
import React from 'react';

const Tumb = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className='tumb-checkbox'
        id='tumb-new'
        type='checkbox'
      />
      <label
        style={{ background: isOn && '#06D6A0' }}
        className='tumb-label'
        htmlFor='tumb-new'
      >
        <span className='tumb-button' />
      </label>
    </>
  );
};

export default Tumb;
