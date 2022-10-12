import React, { useState } from 'react'
import Die from './components/Die'

function App() {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6)) //pushes 10 random value of numbers 1-6
    }

    return newDice
  }

  const diceElements = dice.map(die => <Die value={die} />) //map over the dice array

  function rollDice(){
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
        <button onClick={rollDice}>Roll</button>
      </main>
    </div>
  )
}

export default App
