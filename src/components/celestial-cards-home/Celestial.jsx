import React from 'react';
import './Celestial.css';

function Celestial({ celestialId, name, imgSrc, description }) {
  return (
    <div className="Celestial">
      <div className="CelestialCard">
        <h2 className="cardId">{celestialId}</h2>
        <img className="Celestial-img" src={imgSrc} alt={name} />
        <div className="Celestial-description">
          <h3>{name}</h3>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}

export default Celestial;
