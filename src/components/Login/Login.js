import Modal from '../Modal/Modal';
import './Login.css';
import React from 'react';
import { Navigate } from 'react-router-dom';

function Login({ onSubmit, loginErrorMessage, loggedIn }) {

  return (
    <main className='login'>
      <Modal
        title='Рады видеть!'
        buttonText='Войти'
        inscription='Ещё не зарегистрированы?'
        linkName='Регистрация'
        linkTo='/signup'
        onSubmit={onSubmit}
        errorMessage={loginErrorMessage}
      />
      {loggedIn && <Navigate to="/movies" />}
    </main>
  )
};

export default Login;
