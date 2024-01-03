import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/index';
import { useState } from 'react';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='page'>
      <Header isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default App;
