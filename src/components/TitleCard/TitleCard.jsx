import React from 'react';
import './TitleCard.css';
import HowToPlay from '../HowToPlay/HowToPlay';

const TitleCard = () => {
  const title = "Higher or Lower: Country Populations";
  const titleArray = title.split('');

  return (
    <div className="title-card">
      <h1>
        {titleArray.map((char, index) => (
          <span key={index} className="text-animate-hover">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
      <div className="game-info">
        <HowToPlay />
      </div>
    </div>
  );
};

export default TitleCard;
