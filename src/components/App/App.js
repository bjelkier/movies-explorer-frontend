import React, { useState } from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='root'>
      <Header loggedIn={loggedIn} />
      <Main />
    </div>
  )
}

export default App;
