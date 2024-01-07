import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <h3 className='about-me__title'>Студент</h3>
      <div className='about-me__info'>
        <h2 className='about-me__name'>Виталий</h2>
        <h4 className='about-me__profession'>Фронтенд-разработчик, 30 лет</h4>
        <p className='about-me__desc'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <div className='about-me__image'></div>
        <a className='about-me__social-link' href='da'>
          Github
        </a>
      </div>
      <a href='da' className='about-me__portfolio'>Портфолио</a>
      <div className='about-me__project'>
        <a className='about-me__project-link' href='da'>
          Статичный сайт
        </a>
        <a href='da'>
          <div className='about-me__arrow-link'></div>
        </a>
      </div>
      <div className='about-me__project'>
        <a className='about-me__project-link' href='da'>
          Адаптивный сайт
        </a>
        <a href='da'>
          <div className='about-me__arrow-link'></div>
        </a>
      </div>
      <div className='about-me__project'>
        <a className='about-me__project-link' href='da'>
          Одностраничное приложение
        </a>
        <a href='da'>
          <div className='about-me__arrow-link'></div>
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
