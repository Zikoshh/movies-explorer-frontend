import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <a
        className='portfolio__link'
        href='https://github.com/Zikoshh/how-to-learn'
        target='_blank'
        rel='noreferrer'
      >
        <span className='portfolio__project-name'>Статичный сайт</span>
        <div className='portfolio__arrow-icon' />
      </a>
      <a
        className='portfolio__link'
        href='https://github.com/Zikoshh/russian-travel'
        target='_blank'
        rel='noreferrer'
      >
        <span className='portfolio__project-name'>Адаптивный сайт</span>
        <div className='portfolio__arrow-icon' />
      </a>
      <a
        className='portfolio__link'
        href='https://github.com/Zikoshh/react-mesto-api-full-gha'
        target='_blank'
        rel='noreferrer'
      >
        <span className='portfolio__project-name'>
          Одностраничное приложение
        </span>
        <div className='portfolio__arrow-icon' />
      </a>
    </section>
  );
};

export default Portfolio;
