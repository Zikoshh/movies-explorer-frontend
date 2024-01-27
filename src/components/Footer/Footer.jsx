import { useLocation } from 'react-router-dom';
import './Footer.css';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isToBeHidden, setIsToBeHidden] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/profile') {
      return setIsToBeHidden(true);
    }

    if (location.pathname === '/signin') {
      return setIsToBeHidden(true);
    }

    if (location.pathname === '/signup') {
      return setIsToBeHidden(true);
    }
  }, [location])

  return (
    <footer className={`footer ${isToBeHidden ? 'footer_hidden' : ''}`}>
      <h5 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h5>
      <div className='footer__container'>
        <p className='footer__copyright'>© 2024</p>
        <div className='footer__links'>
          <a className='footer__link' href='da'>
            Яндекс.Практикум
          </a>
          <a className='footer__link' href='da'>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
