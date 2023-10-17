import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ cardInfo, onLike, isSavedMovies, image, savedMovies, onDelete }) {
  const [formatedDuration, setFormatedDuraion] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [savedCard, setSavedCard] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isSavedRoute = location.pathname === '/saved-movies';
  const shouldDisplayLikeButton = location.pathname === '/movies' ? true : isHovered;

  useEffect(() => {
    savedMovies.forEach((card) => {
      if (card.movieId === cardInfo.id) {
        setSavedCard(card);
        setIsLiked(true);
      }
    })
  }, [savedMovies])

  useEffect(() => {
    setFormatedDuraion(formatingDuration(cardInfo.duration))
  }, [cardInfo.duration])

  function formatingDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`
  }

  function handleLike() {
    setIsLiked(!isLiked);
    onLike(cardInfo, isLiked, savedCard);
  }

  function handleDelete() {
    onDelete(cardInfo)
  }

  return (
    <article className='card'
      onMouseEnter={isSavedRoute ? () => setIsHovered(true) : null}
      onMouseLeave={isSavedRoute ? () => setIsHovered(false) : null}>
      <a className="card__trailer-link" href={cardInfo.trailerLink} target='_blank' rel="noreferrer" >
        <div className='card__cover' style={{ backgroundImage: `url(${image}` }} />
      </a>
      <div className='card__info'>
        <h2 className='card__title'> {cardInfo.nameRU} </h2>
        {isSavedMovies && isSavedRoute ? (
          isHovered && <button className='card__delete' type='button' onClick={handleDelete}></button>
        ) : (
          shouldDisplayLikeButton && <button className={`card__like ${isLiked && 'card__like_active'}`} onClick={handleLike} type='button'></button>
        )}
      </div>
      <span className='card__duration'>{formatedDuration}</span>
    </article>
  )
};

export default MoviesCard;
