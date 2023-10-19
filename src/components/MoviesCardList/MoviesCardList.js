import { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList({ searchMovies, message, onLike, savedMovies, activePreloader }) {

  
  const [displayedFilms, setDisplayedFilms] = useState([]);
  const [moviesQuantity, setMoviesQuantity] = useState(16); //Сколько сейчас отображается фильмов
  const [moviesCols, setMoviesCols] = useState(4);
  const [moviesRows, setMoviesRows] = useState(3);
  const [moviesAddCount, setMoviesAddCount] = useState(4);
  const [isButtonMoreActive, setIsButtonMoreActive] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 786) setGrid(1,5,2);
    else if (window.innerWidth <= 1007) setGrid(2,4,2);
    else if (window.innerWidth <= 1297) setGrid(3,4,3);
    else setGrid(4,4,4);
  }

  const setGrid = (cols, rows, addCount) => {
    setMoviesCols(cols);
    setMoviesRows(rows);
    setMoviesAddCount(addCount);
  }

  const handleClickButtonMore = () => {
    setMoviesQuantity(moviesQuantity + moviesAddCount);
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

    var quantity = moviesQuantity >= searchMovies.length ? searchMovies.length :  Math.floor(moviesQuantity / moviesCols) * moviesCols;

    setDisplayedFilms(searchMovies.slice(0, quantity));
    handleDisplayButtonMore();
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [moviesQuantity, moviesCols, moviesRows])

  useEffect(() => {
    handleResize();
  }, [activePreloader]);

  useEffect(() => {
    var quantity = moviesCols * moviesRows;
    setMoviesQuantity(quantity);
    setDisplayedFilms(searchMovies.slice(0, quantity));
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
