import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import profileIcon from '../../images/profile-icon.svg';

function Navigation () {
  const [menuIsClose, setMenuIsClose] = React.useState(true);
  var iconClassName = `navigation__mobile-icon ${menuIsClose ? 'is-close' : ''} `;
  var overlayClassname = `navigation__overlay ${menuIsClose ? 'is-close' : ''} `;
  var navigationClassName = `navigation ${menuIsClose ? 'is-close' : ''} `;
  var navigationLinkClassName = `navigation__link ${menuIsClose ? 'is-close' : ''} `;

  function menuHandler () {
    menuIsClose ? setMenuIsClose(false) : setMenuIsClose(true);
  }

  const history = useHistory();

  function redirectHome () {
    history.push('/');
  }

  function redirectMovies () {
    history.push('/movies');
  }

  function redirectSavedMovies () {
    history.push('/saved-movies');
  }

  function redirectProfile () {
    history.push('/profile');
  }

  return (
    <>
      <div className={overlayClassname}>
        <div className={navigationClassName}>
          <nav className='navigation__links'>
            <p className={navigationLinkClassName} onClick={redirectHome}>Главная</p>
            <p className='navigation__link' onClick={redirectMovies}>Фильмы</p>
            <p href='#' className='navigation__link' onClick={redirectSavedMovies}>Сохраненные фильмы</p>

          </nav>
          <div className='navigation__user-info'>
            <p className='navigation__user-link' onClick={redirectProfile}>Аккаунт</p>
            <div className='navigation__user-icon-wrap'>
              <img className='navigation__user-icon' src={profileIcon} alt='user icon' />
            </div>
          </div>

        </div>
        <div className='header__auth hidden'>
          {/*
        <button className='btn btn_type_auth'>Регистрация</button>
        <button className='btn btn_type_auth'>Войти</button> */}
        </div>
      </div>
      <i class={iconClassName} onClick={menuHandler} />

    </>

  );
}

export default Navigation;
