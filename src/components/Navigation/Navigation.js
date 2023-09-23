import './Navigation.css';
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import accountIcon from '../../images/account.svg';

function Navigation({ loggedIn }) {

  const [openMenu, setOpenMenu] = React.useState(false);
  const path = useLocation().pathname;

  function handlerSwitchMenu() {
    if (window.innerWidth <= 770) {
      setOpenMenu(!openMenu);
    }
  }

  return (
    <div className='navigation'>
      <div className='navigation__switch'>
        <div className={`navigation__dark ${openMenu && 'navigation__dark_active'}`} onClick={handlerSwitchMenu} />
        <div className={`navigation__burger ${openMenu && 'navigation__burger_active'}`} onClick={handlerSwitchMenu} />
        <nav className={`navigation__links ${openMenu && 'navigation__links_active'}`}>
          <NavLink className={({ isActive }) => `navigation__link navigation__link_type_main ${isActive ? 'navigation__link_active' : ''}`} to='/'
            onClick={handlerSwitchMenu}>Главная</NavLink>
          <NavLink className={({ isActive }) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`} to='/movies/all-movies'
            onClick={handlerSwitchMenu}>Фильмы</NavLink>
          <NavLink className={({ isActive }) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`} to='/saved-movies'
            onClick={handlerSwitchMenu}>Сохраненные фильмы</NavLink>
          <Link className={`navigation__profile ${path !== '/' && 'navigation__profile_background_gray'}`} to='/profile'>
            Аккаунт
            <img className={`navigation__image ${path !== '/' && 'navigation__image_background_gray'}`} src={accountIcon} alt='Иконка профиля пользователя'></img>
          </Link>
        </nav>
      </div>
      {/* <>
          <div></div>
          <div className='navigation__pass-panel'>
            <Link className='navigation__pass-link' to='/signup'>Регистрация</Link>
            <Link className='navigation__pass-link navigation__pass-link_signin' to='/signin'>Войти</Link>
          </div>
        </> */}
    </div>
  )
}

export default Navigation;
