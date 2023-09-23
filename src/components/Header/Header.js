import './Header.css';
import logo from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation.js';
import { Link, useLocation } from 'react-router-dom';

function Header({ loggedIn }) {

  const path = useLocation().pathname;

  return (
    <header className={`header ${path !== '/' && 'header_transparent'}`}>
      <div className='header__container'>
        <Link to='/'><img className='header__logo' src={logo} alt='логотип проекта'></img></Link>
        <Navigation
          loggedIn={loggedIn}
        />
      </div>
    </header>
  )
}

export default Header;
