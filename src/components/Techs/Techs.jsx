import './Techs.css';
import NavTab from '../NavTab/index';

const Techs = () => {
  return (
    <section className='techs'>
      <h3 className='techs__title'>Технологии</h3>
      <h2 className='techs__desc'>7 технологий</h2>
      <p className='techs__subtitle'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <NavTab isSectionTechs={true}>
        <a
          className='navtab__link navtab__link_techs'
          href='https://developer.mozilla.org/en-US/docs/Web/HTML'
          target='_blank'
          rel='noreferrer'
        >
          HTML
        </a>
        <a
          className='navtab__link navtab__link_techs'
          href='https://developer.mozilla.org/en-US/docs/Web/CSS'
          target='_blank'
          rel='noreferrer'
        >
          CSS
        </a>
        <a
          className='navtab__link navtab__link_techs'
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          target='_blank'
          rel='noreferrer'
        >
          JS
        </a>
        <a
          className='navtab__link navtab__link_techs'
          href='https://react.dev/'
          target='_blank'
          rel='noreferrer'
        >
          React
        </a>
        <a
          className='navtab__link navtab__link_techs'
          href='https://git-scm.com/'
          target='_blank'
          rel='noreferrer'
        >
          Git
        </a>
        <a
          className='navtab__link navtab__link_techs'
          href='https://expressjs.com/'
          target='_blank'
          rel='noreferrer'
        >
          Express.js
        </a>
        <a
          className='navtab__link navtab__link_techs'
          href='https://www.mongodb.com/'
          target='_blank'
          rel='noreferrer'
        >
          mongoDB
        </a>
      </NavTab>
    </section>
  );
};

export default Techs;
