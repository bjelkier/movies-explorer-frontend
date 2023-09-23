import { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import movies from '../../utils/films.js';

function MoviesCardList() {

  const [cardsCounter, setCardsCounter] = useState(16);
  const [cards, setCards] = useState(movies.slice(0, cardsCounter))

  function more() {
    let counter = cardsCounter;
    counter += 16;
    setCardsCounter(counter);
    setCards(movies.slice(0, counter))
  }

  return (
    <section className='cards'>
      <div className='cards__container'>
        {cards.map(({ id, nameRU, duration, image }) => (
          <MoviesCard
            key={id}
            cardTitle={nameRU}
            cardDuration={duration}
            cardImage={`https://api.nomoreparties.co/${image.url}`}
            isSavedMovies={false}
          />
        ))
        }
      </div>
      <button className='cards__button' onClick={more} >Ещё</button>
    </section>
  )
}

export default MoviesCardList;
