import { useState, useEffect } from 'react';
import axios from 'axios';
import TitleCard from './components/TitleCard/TitleCard';
import GameScreen from './components/GameScreen/GameScreen';
import throwConfetti from './utils/confetti';

function App() {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [newCountry, setNewCountry] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [currentPopulation, setCurrentPopulation] = useState(null);
  const [newPopulation, setNewPopulation] = useState(null);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [winningMessage, setWinningMessage] = useState('');

  useEffect(() => {
    startGame();
  }, []);

  const startGame = async () => {
    try {
      const response = await axios.post('https://higherorlower-dbe9b46ea7e3.herokuapp.com/start-game');
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
      const response = await axios.post('https://higherorlower-dbe9b46ea7e3.herokuapp.com/submit-guess', {
        current_country: currentCountry,
        new_country: newCountry,
        guess: guess,
      });

      if (response.data.has_won) {
        setGameOver(true);
        setScore(score + 1)
        setHighestScore(score + 1);
        localStorage.setItem('highestScore', score);
        throwConfetti();
        setWinningMessage("Congratulations! You won the game!");
      }
      else if (response.data.result === 'wrong') {
        setGameOver(true);
        setCurrentPopulation(currentCountry.population);
        setNewPopulation(newCountry.population);
        setWinningMessage('');
        if (score > highestScore) {
          setHighestScore(score);
          localStorage.setItem('highestScore', score);
        }
      }
      else {
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
        winningMessage={winningMessage}
      />
    </div>
  );
}

export default App;
