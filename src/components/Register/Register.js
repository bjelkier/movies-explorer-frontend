import Modal from '../Modal/Modal.js';
import './Register.css';
import React from 'react';
import { Navigate } from 'react-router-dom';

function Register({ onSubmit, registerErrorMessage, loggedIn }) {

  return (
    <main className='register'>
      <Modal
        title='Добро пожаловать!'
        buttonText='Зарегистрироваться'
        inscription='Уже зарегистрированы?'
        linkName='Войти'
        linkTo='/signin'
        isRegister={true}
        onSubmit={onSubmit}
        errorMessage={registerErrorMessage}
      />
      {loggedIn && <Navigate to="/movies" />}
    </main>
  )
};

export default Register;
