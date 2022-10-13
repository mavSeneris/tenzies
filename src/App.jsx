import React, { useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'

function App() {

  /**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 * 
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */

  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      //pushes 10 random value of numbers 1-6
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      })
    }

    return newDice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  function toggleHeld(id) {
    setDice(prevDice => {
      return prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    })
  }


  //Map over the dice array 
  //Then render Die component x times of number of array items
  const diceElements = dice.map(die =>
    <Die
      key={die.id}
      value={die.value}
      toggleHeld={toggleHeld}
      id={die.id}
      isHeld={die.isHeld}
    />
  )


  return (
    <div className="App">
      <main>
        <div className="text-container">
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className="container">
          {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>Roll</button>
      </main>
    </div>
  )
}

export default App
