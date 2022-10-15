import React, { useState, useEffect } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    if (dice.every((die) => die.isHeld && die.value === dice[0].value)) {
      setTenzies(true)
      console.log("You have won!")
    }
  }, [dice])

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice())
    }
    return newDice
  }

  function rollDice() {
    setDice(currentDice => {
      return currentDice.map((die) => {
        return die.isHeld === true ?
          { ...die } :
          generateNewDice()
      })
    })
  }

  function resetDice() {
    setTenzies(false)
    setDice(allNewDice())
  }

  function holdDice(id) {
    setDice(oldDice => {
      return oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    })
  }

  const diceElements = dice.map(die =>
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  )

  return (
    <div className="App">
    {tenzies && <Confetti />}
      <main>
        <div className="text-container">
          {!tenzies ? <div>
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          </div> :
          <h1>Yey! You have won!</h1>
          }
        </div>
        <div className="container">
          {diceElements}
        </div>
        {!tenzies ?
          <button className="roll-dice" onClick={rollDice}>Roll</button> :
          <button className="roll-dice" onClick={resetDice}>Reset Game</button>
        }
      </main>
    </div>
  )
}

export default App



