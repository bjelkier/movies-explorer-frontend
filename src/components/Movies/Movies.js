import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { Routes, Route } from 'react-router-dom';

function Movies() {

  return (
    <section className='movies'>
      <SearchForm />
      <Routes>
        <Route path='/all-movies' element={<MoviesCardList />} />
      </Routes>
    </section>
  )
}

export default Movies;
