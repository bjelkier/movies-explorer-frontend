import '../MoviesCardList/MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import savedFilms from '../../utils/savedFilms.js';

function SavedMovies() {

  return (
    <section className='cards'>
      <div className='cards__container'>
        {savedFilms.map(({ id, nameRU, duration, image }) => (
          <div key={id}>
            <MoviesCard
              cardTitle={nameRU}
              cardDuration={duration}
              cardImage={`https://api.nomoreparties.co/${image.url}`}
              isSavedMovies={true}
            />
          </div>
        ))
        }
      </div>
    </section>
  )
};

export default SavedMovies;
