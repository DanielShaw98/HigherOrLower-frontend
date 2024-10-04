import React from 'react';
import CountryCard from '../CountryCard/CountryCard';
import './GameScreen.css';

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

export default GameScreen
