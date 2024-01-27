import './AboutProject.css';

const AboutProject = () => {
  return (
    <section id='about-project' className='about-project'>
      <h3 className='about-project__title'>О проекте</h3>
      <div className='about-project__info'>
        <div>
          <h4 className='about-project__info-title'>
            Дипломный проект включал 5 этапов
          </h4>
          <p className='about-project__subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h4 className='about-project__info-title'>
            На выполнение диплома ушло 5 недель
          </h4>
          <p className='about-project__subtitle'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__time-line'>
        <div className='about-project__container'>
          <p className='about-project__backend-took'>1 неделя</p>
          <p className='about-project__frontend-took'>4 недели</p>
        </div>
        <div className='about-project__container'>
          <p className='about-project__backend-title'>Back-end</p>
          <p className='about-project__frontend-title'>Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
