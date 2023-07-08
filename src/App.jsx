import { useState } from 'react'
import './App.css'
import StartGame from './components/startGame/StartGame'
import GamePlay from './components/gamePlay/GamePlay';

function App() {
  
  const [startGame, setStartGame]  = useState(false);

  const toggleGame = ()=>{
    setStartGame((prev) => !(prev));
  }

  return (
    <>
    
      {startGame ? <GamePlay/> : <StartGame toggle = {toggleGame}/>}
    </>
  )
}

export default App
