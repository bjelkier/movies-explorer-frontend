import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Main from '../Main/Main.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import Movies from '../Movies/Movies.js';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import NotFound from '../NotFound/NotFound.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js'
import './App.css';
import api from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loginErrorMessage, setLoginErrorMessenger] = React.useState('');
  const [registerErrorMessage, setRegisterErrorMessenger] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState(['']);
  const [profileErrorMessage, setProfileErrorMessage] = React.useState('');
  const navigate = useNavigate();
  const [authCheckComplete, setAuthCheckComplete] = React.useState(false);
  const location = useLocation();
  const [visibleHeader, setVisibleHeader] = React.useState(false);
  const [visibleFooter, setVisibleFooter] = React.useState(false);

  React.useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies"
    ) {
      setVisibleHeader(true);
      setVisibleFooter(true);
    } else if (location.pathname === "/profile") {
      setVisibleHeader(true);
      setVisibleFooter(false);
    } else {
      setVisibleHeader(false);
      setVisibleFooter(false);
    }
  }, [location, visibleHeader]);

  React.useEffect(() => {
    handleAuth();
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err)
      })
    handleGetSavedMovies();
  }, [loggedIn])

  const handleGetSavedMovies = () => {
    api.getMovies()
      .then((res) => {
        setSavedMovies(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleRegister = (values) => {
    setRegisterErrorMessenger('');
    api.register(values.email, values.password, values.name)
      .then(() => {
        handleLogin(values);
      })
      .catch((err) => {
        console.log(err)
        setRegisterErrorMessenger(err);
      })
  }

  const handleLogin = (values) => {
    setLoginErrorMessenger('');
    api.login(values.email, values.password)
      .then(() => {
        handleAuth();
      })
      .catch((err) => {
        console.log(err)
        setLoginErrorMessenger(err);
      })
  }

  const handleAuth = () => {
    api.checkAuth()
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setAuthCheckComplete(true);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='root'>
        {visibleHeader && <Header loggedIn={loggedIn} />}
        <Routes>
          {authCheckComplete &&
            <>
              <Route path='/profile' element={<ProtectedRoute element={<Profile />} loggedIn={loggedIn} />} />
              <Route path='/movies' element={<ProtectedRoute element={<Movies />} loggedIn={loggedIn} />} />
              <Route path='/saved-movies' element={<ProtectedRoute element={<SavedMovies />} />} />
            </>
          }
          <Route path='/' element={<Main loggedIn={loggedIn} />} />
          <Route path='/signup' element={<Register onSubmit={handleRegister}
            rigiserErrorMessage={registerErrorMessage}
            loggedIn={loggedIn} />} />
          <Route path='/signin' element={<Login onSubmit={handleLogin}
            loginErrorMessage={loginErrorMessage}
            loggedIn={loggedIn} />} />
          <Route path='*' element={<NotFound loggedIn={loggedIn} />} />
        </Routes>
        {visibleFooter && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
