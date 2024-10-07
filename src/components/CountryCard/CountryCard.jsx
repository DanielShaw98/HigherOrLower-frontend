import './CountryCard.css';
import PropTypes from 'prop-types';

const CountryCard = ({ country, currentPopulation, newPopulation, handleGuess, gameOver, rightCard }) => {
  if (!country) {
    return (
    <div>
      <h2 className="loading-title">Loading...</h2>
    </div>
    )
  }
  return (

    <div className="country-card">
      <h2>{country?.name}</h2>
      <img src={country.flags} alt={`${country.name} flag`} />
      {currentPopulation && <h4>Population: {currentPopulation.toLocaleString()}</h4>}
      {gameOver && newPopulation && <h4>Population: {newPopulation.toLocaleString()}</h4>}
      {!currentPopulation && !rightCard && <h5></h5>}
      {rightCard && !gameOver && <div className="button-container">
        <button onClick={() => handleGuess('h')} className="higher-button">
          Higher
          <img src="/arrow-up.svg" alt="white arrow pointing upwards" />
        </button>
        <button onClick={() => handleGuess('l')} className="lower-button">
          Lower
          <img src="/arrow-down.svg" alt="white arrow pointing downwards" />
        </button>
      </div>}
    </div>
  )
}

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
  currentPopulation: PropTypes.number,
  newPopulation: PropTypes.number,
  handleGuess: PropTypes.func,
  gameOver: PropTypes.bool,
  rightCard: PropTypes.bool,
}

export default CountryCard
