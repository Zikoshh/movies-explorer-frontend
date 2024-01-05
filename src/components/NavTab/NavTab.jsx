import './NavTab.css';

const NavTab = (props) => {
  return (
    <div className={`navtab ${props.isSectionTechs ? 'navtab_techs' : ''}`}>
      {props.children}
    </div>
  );
};

export default NavTab;
