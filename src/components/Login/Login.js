import Modal from '../Modal/Modal';
import './Login.css';
import React from 'react';

function Login() {

  return (
    <div className='login'>
      <Modal
        title='Рады видеть!'
        buttonText='Войти'
        inscription='Ещё не зарегистрированы?'
        linkName='Регистрация'
        linkTo='/signup'
      />
    </div>
  )
};

export default Login;
