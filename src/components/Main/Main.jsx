import './Main.css';
import Promo from '../Promo/index';
import AboutProject from '../AboutProject/index';
import Techs from '../Techs/index';
import AboutMe from '../AboutMe/index';
import Portfolio from '../Portfolio/index';

const Main = () => {
  return (
    <main className='main'>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
};

export default Main;
