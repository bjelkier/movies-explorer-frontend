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
      <div className='card__image' style={{ backgroundImage: `url(${cardImage})` }} />
      <div className='card__info'>
        <p className='card__title'> {cardTitle} </p>
        {isSavedMovies ? (
          <button className='card__delete'></button>
        ) : (
          <button className={`card__like ${isLiked && 'card__like_active'}`} onClick={handleLike}></button>
        )
        }
      </div>
      <span className='card__duration'>{`${hours === 0 ? "" : hours + "ч"} ${minutes}м`}</span>
    </article>
  )
};

export default MoviesCard;
