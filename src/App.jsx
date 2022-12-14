import React, { useState, useEffect } from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import StopWatch from './components/Stopwatch';
import PrevTime from './components/PrevTime';

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [roll, setRoll] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [prevTime, setPrevTime] = useState(0);
  const [dieFace, setDieFace] = useState(false)



  //  Timer Functionality
  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    };
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  // End game conditions
  useEffect(() => {
    const firstValue = dice[0].value;
    const allHeld = dice.every((die) => die.isHeld);
    const diceValue = dice.every((die) => die.value === firstValue);
    if (allHeld && diceValue) {
      setTenzies(true);
      setIsPaused(!isPaused);
    };
  }, [dice]);

  // gets last game elpapsed time to locaLStorage and set as the previous time
  useEffect(() => {
    setPrevTime(JSON.parse(localStorage.getItem('time')));
  });

  // saves current game elapsed time to localStorage
  useEffect(() => {
    if (tenzies) {
      localStorage.setItem('time', JSON.stringify(time));
    };
  }, [time]);


  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    };
  };

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  };

  //* Buttons
  function rollDice() {
    setDice(currentDice => {
      return currentDice.map((die) => {
        return die.isHeld === true ?
          { ...die } :
          generateNewDice();
      });
    });
    setIsActive(true);
    setIsPaused(false);
    setRoll(roll + 1);
  };

  // Resets the game and timer if the game is won.
  function resetDice() {
    setTenzies(false);
    setDice(allNewDice());
    setRoll(0);
    setIsActive(false);
    setTime(0);
  }

  function holdDice(id) {
    setDice(oldDice => {
      return oldDice.map((die) => {
        return die.id === id ?
          { ...die, isHeld: !die.isHeld } : die
      });
    });
    // starts timer when any die is clicked
    setIsActive(true);
    setIsPaused(false);
    if (tenzies){
      resetDice()
    }
  };

  function setFace() {
    setDieFace(!dieFace);
  }
  //* .................................

  const diceElements = dice.map(die =>
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
      dieFace={dieFace}
      tenzies={tenzies}
    />
  );

  return (
    <div className="App">
      {tenzies && <Confetti />}
      <main>

        {!tenzies &&
          <div className="face-setter">
            <button onClick={setFace}>
              {dieFace ? "#" : "Die"}
            </button>
          </div>}

        <div className="text-container">
          {!tenzies ?
            <div>
              <h1>Tenzies</h1>
              <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div> :

            <h1 className='game-message'>
              {`Yey! all ${dice[0].value}'s and you rolled ${roll} times`}
            </h1>
          }
        </div>

        <div className="container">
          {diceElements}
        </div>

        <PrevTime
          prevTime={prevTime}
        />

        <StopWatch
          time={time}
        />

        {!tenzies ?
          <button className="roll-dice" onClick={rollDice}>{roll > 0 ? `Roll ${roll}` : `Roll`}</button> :
          <button className="roll-dice" onClick={resetDice}>New Game</button>
        }
      </main>
    </div>
  )
}

export default App