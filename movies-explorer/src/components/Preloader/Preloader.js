import React from 'react';

import './Preloader.css';

const Preloader = (props) => {
  const preloaderClassName = `preloader ${props.loading ? '' : 'hidden'}`;
  return (
    <div className={preloaderClassName}>
      <div className='preloader__container'>
        <span className='preloader__round' />
      </div>
    </div>
  );
};

export default Preloader;
