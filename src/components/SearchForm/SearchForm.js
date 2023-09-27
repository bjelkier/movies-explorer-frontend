import React from 'react';
import './SearchForm.css';
import search from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm() {

  const searchRef = React.useRef();

  const handleFocus = (evt) => {
    searchRef.current.focus();
  }

  const [placeholder, setPlaceholder] = React.useState('Фильм');

  return (
    <section className='search'>
      <div className='search__container'>
        <form className='search__form'>
          <div className='search__block'>
            <img className='search__icon' src={search} alt='Иконка лупы' onClick={handleFocus} />
            <input className='search__input' name='search' placeholder={placeholder} ref={searchRef} required ></input>
            <button className='search__button' type='submit'>Найти</button>
          </div>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  )
};

export default SearchForm;
