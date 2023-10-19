import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ searchShortMovies, positionCheckbox }) {

  const [inputShortMoviesValue, setInputShortMoviesValue] = React.useState(positionCheckbox);

  React.useEffect(() => {
    setInputShortMoviesValue(positionCheckbox)
  }, [positionCheckbox])

  React.useEffect(() => {
    searchShortMovies(inputShortMoviesValue);
  }, [inputShortMoviesValue])

  const handleShortMoviesChange = (evt) => {
    setInputShortMoviesValue(evt.target.checked);
  }

  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input className='filter-checkbox__checkbox-hidden' type='checkbox'
          name='shortfilms' id='shortfilms' onChange={handleShortMoviesChange} checked={inputShortMoviesValue}></input>
        <span className='filter-checkbox__checkbox' />
        <span className='filter-checkbox__span'>Короткометражки</span>
      </label>
    </div>
  )
};

export default FilterCheckbox;
