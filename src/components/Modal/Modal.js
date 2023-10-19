import './Modal.css';
import logo from '../../images/header-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import useValuesValidation from '../../utils/useValuesValidation';

function Modal({ onSubmit, title, buttonText, inscription, linkName, linkTo, isRegister, errorMessage }) {
  const path = useLocation().pathname;
  const { values, handleChange, errors, isValid, resetForm } = useValuesValidation()
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  }

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <div className='modal'>
      <Link className='modal__logo' to='/'><img className='modal__image' src={logo} alt='Логотип проектной работы' /></Link>
      <h1 className='modal__title'>{title}</h1>
      <form className='modal__form' onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <label className='modal__label' htmlFor='name'>Имя</label>
            <input className={`modal__input modal__input_value_name ${errors.name && 'modal__input_error'}`} placeholder='Представьтесь'
              onChange={handleChange} value={values.name || ''}
              name='name' type='text' id='name' minLength='2' maxLength='40' required />
            {errors.name && <span className='modal__error'>{errors.name || ''}</span>}
          </>
        )}
        <label className='modal__label' htmlFor='email'>E-mail</label>
        <input className={`modal__input modal__input_value_email ${errors.email && 'modal__input_error'}`} placeholder='Введите адрес электронной почты'
          onChange={handleChange} value={values.email || ''}
          name='email' type='email' id='email' required />
        {errors.email && <span className='modal__error'>{errors.email || ''}</span>}
        <label className='modal__label' htmlFor='password'>Пароль</label>
        <input className={`modal__input modal__input_value_password ${errors.password && 'modal__input_error'}`} placeholder='Введите пароль'
          onChange={handleChange} value={values.password || ''}
          name='password' type='password' id='password' minLength='6' required />
        {errors.password && <span className='modal__error'>{errors.password || ''}</span>}
        {errorMessage && <span className='modal__server-error'>{errorMessage}</span>}
        <button className={`modal__button ${!isValid && 'modal__button_disabled'}`}
          disabled={!isValid} type='submit'>{buttonText}</button>
      </form>
      <span className={`modal__span ${path === '/signin' && 'modal__span_type_login'}`}>
        {inscription}
        <Link className='modal__link' to={linkTo}>
          {linkName}
        </Link>
      </span>
    </div>
  )
};

export default Modal;
