
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import '../../index.css';

import Movies from '../Movies/Movies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Main from '../Main/Main.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';
import { register, authorize, getContent } from '../../utils/moviesAuth.js';
import checkResponse from '../../utils/checkResponse';

function App () {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  // const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [toolTipState, setToolTipState] = React.useState({ type: '', text: '' });
  const [authToken, setAuthToken] = useState(window.localStorage.getItem('jwt'));
  const [onError, setOnError] = React.useState('');

  // function handleInfoToolTip () {
  //   setIsInfoToolTipOpen(true);
  // }

  const handleLogin = ({ password, email }) => {
    authorize({ email, password })
      .then((data) => {
        if (data.token) {
          setAuthToken(data.token);
          window.localStorage.setItem('jwt', data.token);
          history.push('/movies');
          // tokenCheck();
        } else {
          setOnError(data);
        }
      });
  };

  const handleRegister = ({ name, password, email }) => {
    return register({ name, password, email }).then((res) => {
      handleLogin({ password, email });
      // setToolTipState({ type: 'ok', text: 'Вы успешно зарегистировались!' });
      // handleInfoToolTip();
      return res;
    }).catch(res => {
      console.log(res);
      checkResponse(res);
      // handleInfoToolTip();
      // setToolTipState({ type: 'error', text: 'Что-то пошло не так! Попробуйте еще раз.' });
    });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page__content'>

        <Switch>

          <ProtectedRoute
            exact path='/'
            loggedIn={loggedIn}
            component={Main}
          />
          <Route path='/sign-in'>
            <Login onLogin={handleLogin} errorMessage={onError} />
          </Route>
          <Route path='/sign-up'>
            <Register onRegister={handleRegister} errorMessage={onError} />
          </Route>
          <Route path='/not-found'>
            <NotFoundPage />
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

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
