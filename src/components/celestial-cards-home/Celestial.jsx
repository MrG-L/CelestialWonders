import React from 'react';
import './Celestial.scss';

function Celestial({ celestialId, name, imgSrc, description }) {
  return (
    <div className="Celestial">
      <div className="CelestialCard">
        <img className="Celestial-img" src={imgSrc} alt={name} />
        <div className="Celestial-description">
          <h3 className="cardTitle">{name}</h3>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}

export default Celestial;
