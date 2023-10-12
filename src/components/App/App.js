import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='root'>
        {visibleHeader && <Header />}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {visibleFooter && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
