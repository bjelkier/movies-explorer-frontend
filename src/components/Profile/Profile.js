import './Profile.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import useValuesValidation from '../../utils/useValuesValidation';

function Profile({ onExit, onSubmit, profileErrorMessage }) {
  const currentUserContext = React.useContext(CurrentUserContext);
  const [isEdited, setIsEdited] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(profileErrorMessage);
  const { values, handleChange, isValid, resetForm, setValues } = useValuesValidation();
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  function handleEditSwitch() {
    resetForm();
    setErrorMessage('');
    setIsEdited(!isEdited);
    setValues({ ...values, name: currentUserContext.name, email: currentUserContext.email })
  }

  React.useEffect(() => {
    if (values.name === currentUserContext.name && values.email === currentUserContext.email) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(isValid);
    }
  }, [values]);

  React.useEffect(() => {
    setErrorMessage('');
    resetForm();
  }, [resetForm]);

  React.useEffect(() => {
    if ((profileErrorMessage === "Успешно!") && isEdited) {
      setErrorMessage(profileErrorMessage);
      setTimeout(handleEditSwitch, 1000);
    }
  }, [onSubmit]);

  function handleExit() {
    onExit();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(values)
  }

  return (
    <main className='profile'>
      <form className='profile__form' onSubmit={handleSubmit}>
        <h1 className='profile__title'>Привет, {currentUserContext.name}!</h1>
        <label className={`profile__label ${isEdited && 'profile__label_active'}`} htmlFor='name'>
          Имя
          <input className='profile__input profile__input_type_name' disabled={isEdited ? '' : 'true'}
            value={isEdited ? values.name : currentUserContext.name} name='name' type='text' id='name'
            minLength='2' maxLength='40' required placeholder='Имя' onChange={handleChange} />
        </label>
        <label className='profile__label' htmlFor='email'>
          E-mail
          <input className='profile__input profile__input_type_email' disabled={isEdited ? '' : 'true'}
            value={isEdited ? values.email : currentUserContext.email} name='email' type='email' id='email'
            required placeholder='Email' onChange={handleChange} />
        </label>
        {
          isEdited ? (
            <div className='profile__links'>
              <span className='profile__error'>{errorMessage}</span>
              <button className={`profile__link profile__link_type_submit ${!buttonDisabled && 'profile__button_disabled'}`}
                disabled={!buttonDisabled} type='submit'>Сохранить</button>
            </div>

          ) : (
            <div className='profile__links'>
              <button className='profile__link profile__link_type_edit' type='button' onClick={handleEditSwitch}>Редактировать</button>
              <NavLink className='profile__link profile__link_type_exit' type='button' to="/" onClick={handleExit}>Выйти из аккаунта</NavLink>
            </div>
          )
        }

      </form>
    </main>
  )
};

export default Profile;
