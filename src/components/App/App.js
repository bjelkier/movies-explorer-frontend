import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='root'>
        <Header loggedIn={loggedIn} />
      </div>
    </CurrentUserContext.Provider>

  )
}

export default App;
