import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
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
