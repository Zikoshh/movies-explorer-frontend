import './Promo.css';
import NavTab from '../NavTab/index';

const Promo = () => {
  return (
    <section className='promo'>
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <NavTab isSectionTechs={false}>
        <a href='#about-project' className='navtab__link'>
          О проекте
        </a>
        <a href='#techs' className='navtab__link'>
          Технологии
        </a>
        <a href='#about-me' className='navtab__link'>
          Студент
        </a>
      </NavTab>
    </section>
  );
};

export default Promo;
