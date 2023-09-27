import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {

  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList />
    </main>
  )
}

export default Movies;
