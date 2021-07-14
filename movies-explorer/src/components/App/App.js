
import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import '../../index.css';

import Movies from '../Movies/Movies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import { setUserInfo, setAuthToken } from '../../utils/MainApi.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Main from '../Main/Main.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';
import { register, authorize, getContent } from '../../utils/MainApi';
import checkResponse from '../../utils/checkResponse';
import Preloader from '../Preloader/Preloader.js';

function App () {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = useState(!!window.localStorage.getItem('jwt'));
  const [myMovies, setMyMovies] = React.useState([]);
  const [searchQuery, setSearchQuery] = useState(window.localStorage.getItem('SEARCHQUERY') || '');
  const [loading, setLoading] = React.useState(false);
  const [onError, setOnError] = React.useState('');
  const [shortFilms, setShortFilms] = useState(window.localStorage.getItem('SHORTFILMS') || false);
  const [submitMessage, setSubmitMessage] = React.useState('');
  const [authUser, setAuthUser] = React.useState({});

  React.useEffect(() => {
    if (loggedIn) {
      getContent().then(({ data }) => {
        setCurrentUser(data);
      })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loggedIn]);

  const handleLogin = ({ password, email }) => {
    authorize({ email, password })
      .then((data) => {
        if (data.token) {
          setAuthToken(data.token);
          window.localStorage.setItem('jwt', data.token);
          setLoggedIn(true);
          history.push('/movies');
        } else {
          setOnError(data);
        }
      });
  };

  const unAutorization = () => {
    if (loggedIn) {
      setAuthToken(window.localStorage.removeItem('jwt'));

      // setCurrentUser({ email: 'rerere', name: 'dcedcece' });
      setLoggedIn(false);
      setAuthUser({});
      history.push('/');
    }
  };

  useEffect(() => {
    if (loggedIn) {
      getContent().then((data) => {
        if (data) {
          setLoggedIn(true);
          setAuthUser(data.data);
        }
      });
    }
  }, [loggedIn]);

  const handleRegister = ({ name, password, email }) => {
    return register({ name, password, email }).then((res) => {
      handleLogin({ password, email });
      return res;
    }).catch(err => {
      console.log(err);
      checkResponse(err);
    });
  };

  function handleUpdateUser (name) {
    setUserInfo(name)
      .then(res => {
        setCurrentUser(res);
      }).then(data => {
        setSubmitMessage('Данные успешно обновлены!');
        setOnError('');
      })
      .catch((error) => {
        console.log(error);
        setSubmitMessage('');
        setOnError('Что-то пошло не по плану...');
      });
  }

  const saveSearchQuery = (query) => {
    window.localStorage.setItem('SEARCHQUERY', query);
    setSearchQuery(query);
  };

  const saveShortFilms = (value) => {
    if (value) {
      window.localStorage.setItem('SHORTFILMS', value);
    } else {
      window.localStorage.removeItem('SHORTFILMS', value);
    }

    console.log('value shortfilms ' + window.localStorage.getItem('SHORTFILMS'));
    setShortFilms(value);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page__content'>
        <Switch>
          <ProtectedRoute
            exact path='/movies'
            component={Movies}
            setLoading={setLoading}
            savedMovies={false}
            loggedIn={loggedIn}
            shortFilms={shortFilms}
            setShortFilms={saveShortFilms}
            searchQuery={searchQuery}
            setSearchQuery={saveSearchQuery}
            myMovies={myMovies}
          />
          <ProtectedRoute
            exact path='/saved-movies'
            component={SavedMovies}
            savedMovies
            myMovies={myMovies}
            setMyMovies={setMyMovies}
            authUser={authUser}
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            exact path='/'
            component={Main}
            loggedIn={loggedIn}
          />
          <Route path='/sign-in'>
            <Login onLogin={handleLogin} errorMessage={onError} />
          </Route>
          <Route path='/sign-up'>
            <Register onRegister={handleRegister} errorMessage={onError} />
          </Route>
          <Route path='/profile'>
            <Profile unAutorization={unAutorization} handleUpdateUser={handleUpdateUser} submitMessage={submitMessage} onError={onError} />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
        <Preloader loading={loading} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
