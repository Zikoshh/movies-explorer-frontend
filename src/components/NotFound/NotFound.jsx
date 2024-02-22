import { NavLink, useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='popup'>
      <h2 className='popup__title'>404</h2>
      <p className='popup__subtitle'>Страница не найдена</p>
      <NavLink className='popup__link' onClick={handleGoBack}>
        Назад
      </NavLink>
    </div>
  );
};

export default NotFound;
