import { useLocation } from 'react-router-dom';
import './Footer.css';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isToBeHidden, setIsToBeHidden] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/profile' ||
      location.pathname === '/signin' ||
      location.pathname === '/signup'
    ) {
      setIsToBeHidden(true);
    } else {
      setIsToBeHidden(false);
    }
  }, [location]);

  return (
    <footer className={`footer ${isToBeHidden ? 'footer_hidden' : ''}`}>
      <h5 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h5>
      <div className='footer__container'>
        <p className='footer__copyright'>© 2024</p>
        <div className='footer__links'>
          <a
            className='footer__link'
            href='https://practicum.yandex.ru/'
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
          <a
            className='footer__link'
            href='https://github.com/Zikoshh'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
