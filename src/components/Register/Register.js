import Modal from '../Modal/Modal.js';
import './Register.css';
import React from 'react';

function Register() {

  return (
    <div className='register'>
      <Modal
        title='Добро пожаловать!'
        buttonText='Зарегистрироваться'
        inscription='Уже зарегистрированы?'
        linkName='Войти'
        linkTo='/signin'
        isRegister={true}
      />
    </div>
  )
};

export default Register;
