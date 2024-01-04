import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/index';
import Main from '../Main/index';
import Movies from '../Movies/index';
import SavedMovies from '../SavedMovies/index';
import Profile from '../Profile/index';
import Register from '../Profile/index';
import Login from '../Login/index';
import { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='page'>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path='/' element={<Main />} />a
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
