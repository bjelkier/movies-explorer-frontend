import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ cardImage, cardTitle, cardDuration, isSavedMovies }) {
  const [isLiked, setIsLiked] = useState(false);
  const hours = Math.floor(cardDuration / 60);
  const minutes = cardDuration % 60;

  function handleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <article className='card'>
      <div className='card__cover' style={{ backgroundImage: `url(${cardImage})` }} />
      <div className='card__info'>
        <h2 className='card__title'> {cardTitle} </h2>
        {isSavedMovies ? (
          <button className='card__delete' type='button'></button>
        ) : (
          <button className={`card__like ${isLiked && 'card__like_active'}`} onClick={handleLike} type='button'></button>
        )
        }
      </div>
      <span className='card__duration'>{`${hours === 0 ? "" : hours + "ч"} ${minutes}м`}</span>
    </article>
  )
};

export default MoviesCard;
