import './TitleCard.css';
import HowToPlay from '../HowToPlay/HowToPlay';

const TitleCard = () => {
  const title = "Higher or Lower: Country Populations";
  const wordsArray = title.split(' ');

  return (
    <div className="title-card">
      <h1>
        {wordsArray.map((word, wordIndex) => (
          <span key={wordIndex} className="word-container">
            {word.split('').map((char, charIndex) => (
              <span key={charIndex} className="text-animate-hover">
                {char}
              </span>
            ))}
            {wordIndex < wordsArray.length - 1 && '\u00A0'}
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
