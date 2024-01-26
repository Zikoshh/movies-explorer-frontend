import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id='about-me' className='about-me'>
      <h3 className='about-me__title'>Студент</h3>
      <div className='about-me__info'>
        <h2 className='about-me__info-title'>Виталий</h2>
        <h4 className='about-me__info-subtitle'>
          Фронтенд-разработчик, 30 лет
        </h4>
        <p className='about-me__desc'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <div className='about-me__image' />
        <a
          className='about-me__social-link'
          href='https://github.com/Zikoshh'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
