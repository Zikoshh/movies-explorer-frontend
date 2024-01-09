import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='popup'>
      <h2 className='popup__title'>404</h2>
      <p className='popup__subtitle'>Страница не найдена</p>
      <NavLink className='popup__link' to='/'>
        Назад
      </NavLink>
    </div>
  );
};

export default NotFound;
