
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import '../../index.css';

import Movies from '../Movies/Movies.js';
import Promo from '../Promo/Promo.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Main from '../Main/Main.js';

function App () {
  const [loggedIn, setLoggedIn] = useState(true);
  return (

    <div className='page__content'>

      <Switch>

        <ProtectedRoute
          exact path='/'
          loggedIn={loggedIn}
          component={Main}
        />
        <Route path='/sign-in'>
          <Login />
        </Route>
        <Route path='/sign-up'>
          <Register />
        </Route>

        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route>
          {loggedIn ? (
            <Redirect to='/' />
          ) : (
            <Redirect to='/sign-in' />
          )}
        </Route>

      </Switch>
      <div className='openspace' />

    </div>
  );
}

export default App;
