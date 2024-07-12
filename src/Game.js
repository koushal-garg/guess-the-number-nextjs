import React, { useState } from 'react';

const Game = () => {
  const [gameState, setGameState] = useState('start'); // start, playing, win, lose
  const [number, setNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 5;

  const startGame = () => {
    setNumber(Math.floor(Math.random() * 10) + 1);
    setAttempts(0);
    setGuess('');
    setGameState('playing');
  };

  const checkGuess = () => {
    const guessNumber = parseInt(guess, 10);
    setAttempts(attempts + 1);
    if (guessNumber === number) {
      setGameState('win');
    } else if (attempts + 1 >= maxAttempts) {
      setGameState('lose');
    }
  };

  const resetGame = () => {
    setGameState('start');
  };

  return (
    <div className="container">
      <div className="left-side">
        <h1>Guess the Number</h1>
        <div className="rules">
          <h3>Rules</h3>
          <p>1. Start the game</p>
          <p>2. Guess the number between 1-10</p>
          <p>3. You would get 5 chances to guess it right</p>
          <p>4. Lost? Replay</p>
          <p>5. Won? Congrats 🎉</p>
        </div>
      </div>
      <div className="right-side">
        {gameState === 'start' && (
          <div className="card">
            <h1>Guess a number between 1-10</h1>
            <button onClick={startGame}>Start the Game</button>
          </div>
        )}
        {gameState === 'playing' && (
          <div className="card">
            <h1>Attempts left: {maxAttempts - attempts}</h1>
            <input
              type="number"
              min="1"
              max="10"
              placeholder="Enter your guess"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
            <button onClick={checkGuess}>Submit</button>
          </div>
        )}
        {gameState === 'lose' && (
          <div className="card">
            <span role="img" aria-label="sad">
              😢
            </span>
            <h1>You lost !!</h1>
            <p>The correct number was: {number}</p>
            <button onClick={resetGame}>Re-try</button>
          </div>
        )}
        {gameState === 'win' && (
          <div className="card">
            <span role="img" aria-label="party">
              🎉
            </span>
            <h1>You Won !!</h1>
            <p>The correct number was: {number}</p>
            <button onClick={resetGame}>Play again</button>
          </div>
        )}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
          background-color: #f9e076;
        }
        .left-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f9e076;
          padding: 2rem;
        }
        .rules {
          text-align: left;
          margin-top: 2rem;
        }
        .right-side {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #fff;
        }
        .card {
          text-align: center;
          padding: 2rem;
          border-radius: 10px;
          background-color: #ffea94;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        h1 {
          font-family: 'Courier New', Courier, monospace;
          font-size: 24px;
          margin-bottom: 2rem;
        }
        h3 {
          font-family: 'Courier New', Courier, monospace;
          font-size: 20px;
        }
        p {
          font-family: 'Courier New', Courier, monospace;
          font-size: 18px;
          margin-bottom: 1rem;
        }
        button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 5px;
          background-color: #ffffff;
          font-family: 'Courier New', Courier, monospace;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-top: 1rem;
        }
        button:hover {
          background-color: #e0e0e0;
        }
        input {
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          width: 80%;
        }
        span {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Game;
