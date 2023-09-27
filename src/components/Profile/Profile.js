import './Profile.css';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function Profile() {
  const currentUserContext = useContext(CurrentUserContext);
  return (
    <main className='profile'>
      <form className='profile__form'>
        <h1 className='profile__title'>Привет, {currentUserContext.name}!</h1>
        <label className='profile__label' htmlFor='name'>
          Имя
          <input className='profile__input profile__input_type_name' value={currentUserContext.name} name='name' type='text' id='name' minLength='2' maxLength='40' required placeholder='Имя' />
        </label>
        <label className='profile__label' htmlFor='email'>
          E-mail
          <input className='profile__input profile__input_type_email' value={currentUserContext.email} name='email' type='email' id='email' required placeholder='Email' />
        </label>
        <div className='profile__links'>
          <button className='profile__link profile__link_type_edit' type='button'>Редактировать</button>
          <NavLink className='profile__link profile__link_type_exit' to='/signout'>Выйти из аккаунта</NavLink>
        </div>
      </form>
    </main>
  )
};

export default Profile;
