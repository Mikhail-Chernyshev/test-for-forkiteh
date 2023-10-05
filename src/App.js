import { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  const [clickOnBurgerMenu, setclickOnBurgerMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.screen.width);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleClickOnBurger() {
    setclickOnBurgerMenu(!clickOnBurgerMenu);
  }

  return (
    <div className='App'>
      <Header
        windowWidth={windowWidth}
        clickOnBurgerMenu={clickOnBurgerMenu}
        handleClickOnBurger={handleClickOnBurger}
      />
      <Menu windowWidth={windowWidth} clickOnBurgerMenu={clickOnBurgerMenu} />
    </div>
  );
}

export default App;
