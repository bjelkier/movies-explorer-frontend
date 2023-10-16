import { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList({ searchMovies, message, onLike, savedMovies, activePreloader }) {
  const [moviesQuantity, setMoviesQuantity] = useState();
  const [displayedFilms, setDisplayedFilms] = useState([]);
  const [moreMoviesQuantity, setMoreMoviesQuantity] = useState(0);
  const [isButtonMoreActive, setIsButtonMoreActive] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 500) {
      setMoviesQuantity(5);
      setMoreMoviesQuantity(2);
    } else if (window.innerWidth > 500 && window.innerWidth <= 900) {
      setMoviesQuantity(8);
      setMoreMoviesQuantity(2);
    } else {
      setMoviesQuantity(16);
      setMoreMoviesQuantity(4);
    };
  }

  const handleClickButtonMore = () => {
    setMoviesQuantity(moviesQuantity + moreMoviesQuantity)
  }

  const handleDisplayButtonMore = () => {
    if (searchMovies.length > moviesQuantity) {
      setIsButtonMoreActive(true)
    } else {
      setIsButtonMoreActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setDisplayedFilms(searchMovies.slice(0, moviesQuantity));
    handleDisplayButtonMore();
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [moviesQuantity])

  useEffect(() => {
    handleResize();
  }, [activePreloader]);

  useEffect(() => {
    setDisplayedFilms(searchMovies.slice(0, moviesQuantity));
    handleDisplayButtonMore();
  }, [searchMovies]);

  return (
    <section className='cards'>
      {message && <p className='cards__message'>{message}</p>}
      <ul className='cards__container'>
        {displayedFilms.map((cardInfo) => (
          <MoviesCard
            cardInfo={cardInfo}
            key={cardInfo.id}
            onLike={onLike}
            isSavedMovies={savedMovies.some(f => f.id === cardInfo.id)}
            savedMovies={savedMovies}
            image={`https://api.nomoreparties.co${cardInfo.image?.url}`}
          />
        ))
        }
      </ul>
      {isButtonMoreActive && (
        <button className='cards__button' onClick={handleClickButtonMore}>Ещё</button>
      )}
    </section>
  )
}

export default MoviesCardList;
