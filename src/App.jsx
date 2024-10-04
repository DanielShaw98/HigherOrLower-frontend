import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TitleCard from './components/TitleCard/TitleCard';
import GameScreen from './components/GameScreen/GameScreen';

function App() {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [newCountry, setNewCountry] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [currentPopulation, setCurrentPopulation] = useState(null);
  const [newPopulation, setNewPopulation] = useState(null);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = async () => {
    try {
      const response = await axios.post('http://localhost:8000/start-game');
      setCurrentCountry(response.data.current_country);
      setNewCountry(response.data.new_country);
      setCurrentPopulation(null);
      setNewPopulation(null);
      setScore(0);
      setGameOver(false);
    } catch (error) {
      console.error('Error starting the game', error);
    }
  };

  const resetGame = () => {
    startGame();
  };

  const handleGuess = async (guess) => {
    try {
      const response = await axios.post('http://localhost:8000/submit-guess', {
        current_country: currentCountry,
        new_country: newCountry,
        guess: guess,
      });

      if (response.data.result === 'wrong') {
        setGameOver(true);
        setCurrentPopulation(currentCountry.population);
        setNewPopulation(newCountry.population);
        if (score > highestScore) {
          setHighestScore(score);
          localStorage.setItem('highestScore', score);
        }
      } else {
        const answer = response.data.answer;
        setCurrentCountry(newCountry);
        setCurrentPopulation(newCountry.population);
        setNewCountry(response.data.new_country);
        setNewPopulation(response.data.new_country.population);
        setScore(score + 1);
      }
    } catch (error) {
      console.error('Error submitting guess', error);
    }
  };

  return (
    <div className="App">
      <TitleCard />
      <GameScreen
        gameOver={gameOver}
        currentCountry={currentCountry}
        newCountry={newCountry}
        handleGuess={handleGuess}
        currentPopulation={currentPopulation}
        newPopulation={newPopulation}
        score={score}
        highestScore={highestScore}
        resetGame={resetGame}
      />
    </div>
  );
}

export default App;
