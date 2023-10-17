import '../MoviesCardList/MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function SavedMovies({ savedMovies, onDelete }) {
  return (
    <main className='saved-movies'>
      <section className='cards'>
        <ul className='cards__container'>
          {savedMovies.map((cardInfo) => (
            <MoviesCard
              cardInfo={cardInfo}
              key={cardInfo.id}
              onDelete={onDelete}
              isSavedMovies={true}
              savedMovies={savedMovies}
              image={cardInfo.image?.url}
            />
          ))
          }
        </ul>
      </section>
    </main>
  )
};

export default SavedMovies;
