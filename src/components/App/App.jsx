import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/index';
import Main from '../Main/index';

const App = () => {
  return (
    <div className='page'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
