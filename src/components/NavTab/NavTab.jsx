import './NavTab.css';

const NavTab = () => {
  return (
    <div className='navtab'>
      <a href='#about-project' className='navtab__link'>О проекте</a>
      <a href='#techs' className='navtab__link'>Технологии</a>
      <a href='#about-me' className='navtab__link'>Студент</a>
    </div>
  );
};

export default NavTab;
