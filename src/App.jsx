import React, { useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'

function App() {

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

  //Map over the dice array 
  //Then render Die component x times of number of array items
  const diceElements = dice.map(die =>
    <Die
      key={die.id}
      value={die.value}
    />)

  function rollDice() {
    setDice(allNewDice())
  }

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
