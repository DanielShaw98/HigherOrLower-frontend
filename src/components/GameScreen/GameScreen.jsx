import CountryCard from '../CountryCard/CountryCard';
import './GameScreen.css';
import PropTypes from 'prop-types';

const GameScreen = ({ gameOver, score, highestScore, currentCountry, newCountry, handleGuess, currentPopulation, newPopulation, resetGame }) => {
  return (
    <div className="game-screen">
      <div className="card-container">
        <CountryCard country={currentCountry} currentPopulation={currentPopulation} gameOver={gameOver} />
          {gameOver ? (
            <div className="middle-container">
              <button onClick={() => resetGame()}>Play again</button>
              <h3>VS</h3>
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
  )
}

GameScreen.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  highestScore: PropTypes.number.isRequired,
  currentCountry: PropTypes.string.isRequired,
  newCountry: PropTypes.string.isRequired,
  handleGuess: PropTypes.func.isRequired,
  currentPopulation: PropTypes.number.isRequired,
  newPopulation: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired,
};

export default GameScreen
