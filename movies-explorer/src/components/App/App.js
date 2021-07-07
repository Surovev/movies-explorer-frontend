
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
import { setUserInfo } from '../../utils/MainApi.js';

function App () {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  // const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [dataMovies, setDataMovies] = React.useState([]);
  const [toolTipState, setToolTipState] = React.useState({ type: '', text: '' });
  const [authToken, setAuthToken] = useState(window.localStorage.getItem('jwt'));
  const [onError, setOnError] = React.useState('');
  const [authUser, setAuthUser] = React.useState({});

  // function handleInfoToolTip () {
  //   setIsInfoToolTipOpen(true);
  // }

  React.useEffect(() => {
    if (authToken) {
      console.log(authToken);
      getContent(authToken).then(({ data }) => {
        setCurrentUser(data);
      })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [authToken]);

  const handleLogin = ({ password, email }) => {
    authorize({ email, password })
      .then((data) => {
        if (data.token) {
          setAuthToken(data.token);
          window.localStorage.setItem('jwt', data.token);
          setLoggedIn(true);
          history.push('/movies');
          // tokenCheck();
        } else {
          setOnError(data);
        }
      });
  };

  const unAutorization = () => {
    if (authToken) {
      console.log(currentUser);
      setAuthToken(window.localStorage.removeItem('jwt'));

      setCurrentUser({ email: 'rerere', name: 'dcedcece' });
      setLoggedIn(false);
      setAuthUser({});
      console.log(currentUser);
      history.push('/');
    }
  };

  useEffect(() => {
    if (authToken) {
      console.log(authToken);
      console.log(currentUser);
      getContent(authToken).then((data) => {
        if (data) {
          // api.setAutorization(authToken);
          setLoggedIn(true);
          setAuthUser(data.data);
          // history.push('/movies');
        }
      });
    }
  }, [loggedIn]);

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

  function handleUpdateUser (name) {
    setUserInfo(name, authToken)
      .then(res => {
        setCurrentUser(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page__content'>

        <Switch>

          <Route path='/sign-in'>
            <Login onLogin={handleLogin} errorMessage={onError} />
          </Route>
          <Route path='/sign-up'>
            <Register onRegister={handleRegister} errorMessage={onError} />
          </Route>
          <Route path='/not-found'>
            <NotFoundPage />
          </Route>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
          </Route>
          <Route path='/movies'>
            <Movies authUser={authUser} movies={dataMovies} setMovies={setDataMovies} />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies authUser={authUser} movies={dataMovies} setMovies={setDataMovies} />
          </Route>
          <Route path='/profile'>
            <Profile unAutorization={unAutorization} handleUpdateUser={handleUpdateUser} />
          </Route>
          {/* <Route>
            {loggedIn ? (
              <Redirect to='/' />
            ) : (
              <Redirect to='/sign-in' />
            )}
          </Route> */}

        </Switch>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
