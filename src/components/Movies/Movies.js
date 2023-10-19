import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { Routes, Route, useLocation } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import NotFound from '../NotFound/NotFound.js'
import getMoviesCards from '../../utils/MoviesApi';
import React from 'react';
import filterMovies from '../../utils/FilterMovies';
import Preloader from '../Preloader/Preloader.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

function Movies({ loggedIn, savedMovies, onLike, onDelete }) {
  const [searchMovies, setSearchMovies] = React.useState([]);
  const [activePreloader, setActivePreloader] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [searchText, setSearchText] = React.useState('');
  const [inputShortMoviesValue, setInputShortMoviesValue] = React.useState('');
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState(savedMovies);
  const path = useLocation().pathname;

  React.useEffect(() => {
    setFilteredSavedMovies(filterMovies(savedMovies, searchText, inputShortMoviesValue));
    const historyRequest = JSON.parse(localStorage.getItem('search'));
    if (historyRequest && path === '/movies') {
      setSearchMovies(historyRequest['search-result']);
      setSearchText(historyRequest['search-text']);
      setInputShortMoviesValue(historyRequest['search-short-input']);
    } else {
      setSearchMovies([]);
      setSearchText('');
      setInputShortMoviesValue(false);
    }
  }, [path])


  React.useEffect(() => {
    setFilteredSavedMovies(filterMovies(savedMovies, searchText, inputShortMoviesValue));
  }, [savedMovies, searchText, inputShortMoviesValue])


  const handleSearchMovies = (keywords, searchShortsMovies) => {
    setActivePreloader(true);
    setSearchText(keywords);
    setInputShortMoviesValue(searchShortsMovies);

    setMessage('');
    if (path === '/saved-movies') {
      setFilteredSavedMovies(
        filterMovies(savedMovies, keywords, searchShortsMovies)
      )
      setActivePreloader(false);
    } else {
      if (JSON.parse(localStorage.getItem('movies'))) {
        const movies = JSON.parse(localStorage.getItem('movies'));
        const filteredMovies = filterMovies(movies, keywords, searchShortsMovies);
        handleFilter(filteredMovies, keywords, searchShortsMovies);
        setActivePreloader(false);
      } else {
        getMoviesCards()
          .then((res) => {
            localStorage.setItem('movies', JSON.stringify(res));
            const filteredMovies = filterMovies(res, keywords, searchShortsMovies);
            handleFilter(filteredMovies, keywords, searchShortsMovies);
          })
          .catch((err) => {
            console.log(err);
            setSearchMovies([])
            setMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
          })
          .finally(() => {
            setActivePreloader(false);
          })
      }
    }
  }

  function handleFilter(movies, keywords, checkbox) {
    if (Object.keys(movies).length === 0) {
      setSearchMovies([])
      setMessage('Ничего не найдено');
    } else {
      setSearchMovies(filterMovies(movies, keywords, checkbox));
      localStorage.setItem('search', JSON.stringify({
        'search-text': keywords,
        'search-short-input': checkbox,
        'search-result': filterMovies(movies, keywords, checkbox)
      }))
    }
  }

  return (
    <section className='movies'>
      <SearchForm
        onSubmit={handleSearchMovies}
        searchText={searchText}
        inputShortMoviesValue={inputShortMoviesValue}
      />
      {activePreloader && <Preloader />}
      <Routes>
        <Route path='/' element={
          path === '/movies' ?
            <MoviesCardList
              searchMovies={searchMovies}
              message={message}
              onLike={onLike}
              savedMovies={savedMovies}
              activePreloader={activePreloader} /> :
            <ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
              savedMovies={filteredSavedMovies}
              onDelete={onDelete} />
        } />
        <Route path='*' element={<NotFound loggedIn />} />
      </Routes>
    </section>
  )
}

export default Movies;
