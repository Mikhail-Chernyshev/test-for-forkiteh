import React from 'react';
import '../styles/LocationItem.css'

export default function LocationItem({ windowWidth }) {
  return (
    <div className={windowWidth ? 'location location_active' : 'location'}>
      <div className='location-icon'></div>
      <p className='location-city'>Москва и область</p>
    </div>
  );
}
