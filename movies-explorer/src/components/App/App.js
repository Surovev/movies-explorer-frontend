
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import '../../index.css';

import Movies from '../Movies/Movies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import { setUserInfo, addMovie, deleteMovie, getSavedMovies, setAuthToken } from '../../utils/MainApi.js';
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
  // const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [dataMovies, setDataMovies] = React.useState([]);
  const [idSavedMovies, setIdSavedMovies] = React.useState([]);
  const [toolTipState, setToolTipState] = React.useState({ type: '', text: '' });
  const [loading, setLoading] = React.useState(false);
  const [onError, setOnError] = React.useState('');
  const [authUser, setAuthUser] = React.useState({});

  // function handleInfoToolTip () {
  //   setIsInfoToolTipOpen(true);
  // }

  React.useEffect(() => {
    if (loggedIn) {
      console.log(loggedIn);
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
          // tokenCheck();
        } else {
          setOnError(data);
        }
      });
  };

  const unAutorization = () => {
    if (loggedIn) {
      console.log(currentUser);
      setAuthToken(window.localStorage.removeItem('jwt'));

      setCurrentUser({ email: 'rerere', name: 'dcedcece' });
      setLoggedIn(false);
      setAuthUser({});
      console.log(currentUser);
      history.push('/');
    }
  };

  // const handleMovieLike = (movie) => {

  // }

  useEffect(() => {
    if (loggedIn) {
      console.log(currentUser);

      getContent().then((data) => {
        if (data) {
          // api.setAutorization(authToken);
          setLoggedIn(true);
          setAuthUser(data.data);

          getSavedMovies().then(data => setIdSavedMovies(data.map(item => item.id))).catch((error) => {
            console.log(error);
          });

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
    setUserInfo(name)
      .then(res => {
        setCurrentUser(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function handleCardLike (movie) {
  //   const isLiked = savedMovies.id.some(i => i === movie.id);
  //   if (!isLiked) {
  //     api.addLike(card._id).then((newCard) => {
  //       setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  //     }).catch((error) => {
  //       errorPopup(error);
  //     });
  //   } else {
  //     api.removeLike(card._id).then((newCard) => {
  //       setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  //     }).catch((error) => {
  //       errorPopup(error);
  //     });
  //   }
  // }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page__content'>

        <Switch>
          <ProtectedRoute
            exact path='/movies'
            component={Movies}
            setLoading={setLoading}
            savedMovies={false}
            movies={dataMovies}
            setMovies={setDataMovies}
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            exact path='/saved-movies'
            component={SavedMovies}
            savedMovies
            authUser={authUser}
            movies={dataMovies}
            setMovies={setDataMovies}
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
          <Route path='/not-found'>
            <NotFoundPage />
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
        <Preloader loading={loading} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
