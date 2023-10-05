import React, { useState } from 'react';
import '../styles/Menu.css';
import LocationItem from './LocationItem';

export default function Menu({ clickOnBurgerMenu, windowWidth }) {
  const [activeItem, setActiveItem] = useState(0);
  function handleItemClick(index) {
    setActiveItem(index);
  }
  const arrayMenuItems = [
    'Преимущества Tele2',
    'Тарифы',
    'Акции и спецпредложения',
    'Промотариф Tele2',
    'Технология eSIM',
    'Подключение нового абонента',
  ];
  return (
    <div className={clickOnBurgerMenu === false ? 'menu menu_active' : 'menu'}>
      <nav className='menu__items'>
        {arrayMenuItems.map((el, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            className={
              activeItem === index
                ? 'menu__item menu__item_active'
                : 'menu__item'
            }
          >
            <p className='menu__item-name'>{el}</p>
          </li>
        ))}
      </nav>
      {windowWidth < 1440 && <LocationItem windowWidth={windowWidth} />}
    </div>
  );
}
