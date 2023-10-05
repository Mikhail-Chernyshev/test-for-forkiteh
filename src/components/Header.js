import React, { useState } from 'react';
import '../styles/Header.css';
import LocationItem from './LocationItem';

export default function Header({
  handleClickOnBurger,
  clickOnBurgerMenu,
  windowWidth,
}) {
  const [clickOnBell, setclickOnBell] = useState(false);
  const headerBellClassname = `header__notification-box ${
    clickOnBell
      ? 'header__notification-box_disabled'
      : 'header__notification-box'
  }`;
  function handleClickOnBell() {
    setclickOnBell(true);
  }
  console.log(windowWidth);
  return (
    <div className='header'>
      <div className='header__logo'></div>
      {windowWidth > 1439 && <LocationItem />}
      <div className={headerBellClassname}>
        {!clickOnBell && <div className='header__notification-circle'></div>}
        <div
          onClick={handleClickOnBell}
          className='header__notification-bell'
        ></div>
      </div>
      <div onClick={handleClickOnBurger} className='header__burger'></div>
    </div>
  );
}
