import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(positionCheckbox) {
  const [inputShortsMovieValue, setInputShortsMovieValue] = React.useState(positionCheckbox);

  React.useEffect(() => {
    setInputShortsMovieValue(positionCheckbox)
  }, [positionCheckbox])

  const handleShortsMovieChange = (evt) => {
    setInputShortsMovieValue(evt.target.checked);
  }

  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input className='filter-checkbox__checkbox-hidden' type='checkbox'
          name='shortfilms' id='shortfilms' onChange={handleShortsMovieChange} checked={inputShortsMovieValue}></input>
        <span className='filter-checkbox__checkbox' />
        <span className='filter-checkbox__span'>Короткометражки</span>
      </label>
    </div>
  )
};

export default FilterCheckbox;
