import './Modal.css';
import logo from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';
import React from 'react';

function Modal({ title, buttonText, inscription, linkName, linkTo, isRegister }) {

  return (
    <div className='modal'>
      <Link className='modal__logo' to='/'><img className='modal__image' src={logo} alt='Логотип проектной работы' /></Link>
      <h2 className='modal__title'>{title}</h2>
      <form className='modal__form'>
        {isRegister && (
          <>
            <label className='modal__label' htmlFor='name'>Имя</label>
            <input className='modal__input modul__input_type_name' placeholder='Представьтесь'
              name='name' type='text' id='name' minLength='2' maxLength='40' required />
          </>
        )}
        <label className='modal__label' htmlFor='email'>E-mail</label>
        <input className='modal__input modal__input_type_email' placeholder='Введите адрес электронной почты'
          name='email' type='email' id='email' required />
        <label className='modal__label' htmlFor='password'>Пароль</label>
        <input className='modal__input modal__input_type_password' placeholder='Введите пароль'
          name='password' type='password' id='password' minLength='6' required />
        <span className='modul__error'></span>
        <button className='modal__button' type='submit'>{buttonText}</button>
      </form>
      <span className='modal__span'>
        {inscription}
        <Link className='modal__link' to={linkTo}>
          {linkName}
        </Link>
      </span>
    </div>
  )
};

export default Modal;