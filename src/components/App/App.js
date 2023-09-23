import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Main from '../Main/Main.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import Footer from '../Footer/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='root'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
