import CountryCard from '../CountryCard/CountryCard';
import './GameScreen.css';
import PropTypes from 'prop-types';

const GameScreen = ({
  gameOver = false,
  score = 0,
  highestScore = 0,
  currentCountry = {},
  newCountry = {},
  handleGuess,
  currentPopulation = 0,
  newPopulation = 0,
  resetGame,
  winningMessage = '',
}) => {
  return (
    <div className="game-screen">
      <div className="card-container">
        <CountryCard country={currentCountry} currentPopulation={currentPopulation} gameOver={gameOver} />
        {gameOver ? (
          <div className="middle-container">
            {winningMessage && <h2>{winningMessage}</h2>}
            <button onClick={() => resetGame()}>Play again</button>
            {!winningMessage && <h3>VS</h3>}
          </div>
        ) : (
          <div>
            <h3>VS</h3>
          </div>
        )}
        <CountryCard country={newCountry} newPopulation={newPopulation} handleGuess={handleGuess} gameOver={gameOver} rightCard />
      </div>
      <p>Score: {score}</p>
      <p>Highest score: {highestScore}</p>
    </div>
  );
};

GameScreen.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  highestScore: PropTypes.number.isRequired,
  currentCountry: PropTypes.shape({
    name: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    flags: PropTypes.string.isRequired,
  }),
  newCountry: PropTypes.shape({
    name: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    flags: PropTypes.string.isRequired,
  }),
  handleGuess: PropTypes.func.isRequired,
  currentPopulation: PropTypes.number,
  newPopulation: PropTypes.number,
  resetGame: PropTypes.func.isRequired,
  winningMessage: PropTypes.string,
};

export default GameScreen
