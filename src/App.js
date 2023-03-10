import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  // console.log("Treasure:", treasureLocation);
  // console.log("Bomb:", bombLocation);

  const handleGamePlay = (index) => {
    // alert(index)
    let updatedBoard = [...board]

    if(index === treasureLocation) {
      updatedBoard[index] = "💎"
      setBoard(updatedBoard)
    } else if(index === bombLocation) {
      updatedBoard[index] = "💣"
      setBoard(updatedBoard)
    } else 
        updatedBoard[index] = "🏝️" 
        setBoard(updatedBoard)
  }

  const resetGame = () => {
    setBoard([
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"])
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameBoard">
        {board.map((value, index) => {
          return (
            <Square 
            value={value}
            key={index}
            index={index}
            handleGamePlay={handleGamePlay}
              />
          )
        })}
      </div>
      <div>
      <button onClick={() => resetGame}>Reset Game</button>
      </div>
    </>
  )
}

export default App;
