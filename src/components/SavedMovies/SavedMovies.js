import '../MoviesCardList/MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import SearchForm from '../SearchForm/SearchForm';
import savedFilms from '../../utils/savedFilms.js';

function SavedMovies() {

  return (
    <main className='saved-movies'>
      <SearchForm />
      <section className='cards'>
        <ul className='cards__container'>
          {savedFilms.map(({ id, nameRU, duration, image }) => (
            <li key={id}>
              <MoviesCard
                cardTitle={nameRU}
                cardDuration={duration}
                cardImage={`https://api.nomoreparties.co/${image.url}`}
                isSavedMovies={true}
              />
            </li>
          ))
          }
        </ul>
      </section>
    </main>
  )
};

export default SavedMovies;
