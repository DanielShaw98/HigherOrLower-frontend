import { useState } from 'react';
import './HowToPlay.css';

const HowToPlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="how-to-play-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h3>How to play</h3>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <p>Click higher or lower depending on whether you think the country on the right has a higher or lower population than the country on the left.</p>
        </div>
      )}
    </div>
  );
};

export default HowToPlay;
