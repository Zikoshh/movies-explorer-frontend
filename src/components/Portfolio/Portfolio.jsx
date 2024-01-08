import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h3 href='da' className='portfolio__title'>Портфолио</h3>
      <div className='portfolio__project'>
        <a className='portfolio__project-link' href='da'>
          Статичный сайт
        </a>
        <a href='da'>
          <div className='portfolio__arrow-link'></div>
        </a>
      </div>
      <div className='portfolio__project'>
        <a className='portfolio__project-link' href='da'>
          Адаптивный сайт
        </a>
        <a href='da'>
          <div className='portfolio__arrow-link'></div>
        </a>
      </div>
      <div className='portfolio__project'>
        <a className='portfolio__project-link' href='da'>
          Одностраничное приложение
        </a>
        <a href='da'>
          <div className='portfolio__arrow-link'></div>
        </a>
      </div>
    </section>
  )
};

export default Portfolio;