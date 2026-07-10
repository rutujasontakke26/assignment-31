import notFoundImg from './NotFound.png';
import './NotFound.css';
import { useState } from 'react';

function NotFound() {
  const [randomNum] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [guessed, setGuessed] = useState(false);

  const goHome = () => {
    window.location.pathname = '/';
  };

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number!');
      return;
    }
    if (userGuess === randomNum) {
      setMessage('🎯 You got it! Congratulations!');
      setGuessed(true);
    } else if (userGuess < randomNum) {
      setMessage('📈 Too low! Try higher!');
    } else {
      setMessage('📉 Too high! Try lower!');
    }
  };

  return (
    <div className="notfound-wrapper">
      <div className="notfound-container">
        <div className="notfound-left">
          <div className="notfound-illustration">
            <img src={notFoundImg} alt="404 Not Found" />
          </div>
          <div className="notfound-text-section">
            <h1>Oops!</h1>
            <h2>Page Not Found</h2>
            <button onClick={goHome} className="cta-button">
              Back to Home
            </button>
          </div>
        </div>

        <div className="notfound-right">
          <div className="mini-game">
            <h3>Number Guesser</h3>
            <p className="game-description">Guess a number between 1-10</p>
            <div className="guess-input-wrapper">
              <input 
                type="number" 
                min="1" 
                max="10" 
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Enter your guess"
                disabled={guessed}
                className="guess-input"
              />
              <button 
                onClick={handleGuess} 
                className="guess-button"
                disabled={guessed}
              >
                Guess
              </button>
            </div>
            {message && (
              <p className={`game-message ${guessed ? 'success' : ''}`}>
                {message}
              </p>
            )}
            {guessed && (
              <button 
                className="reset-button"
                onClick={() => window.location.reload()}
              >
                Play Again
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;