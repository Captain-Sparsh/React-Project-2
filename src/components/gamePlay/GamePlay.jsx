import { styled } from "styled-components"
import NumberSelector from "../numberSelector/NumberSelector"
import TotalScore from "../topSection/TotalScore"
import RoleDIce from "../RoleDice/RoleDIce"
import { useState } from "react";
import Rules from "../rules/Rules";

const GamePlay = () => {

  const[score,setScore] = useState(0);
  const [isSelected, setIsSelected] = useState();
  const[diceNumber, setDiceNumber] = useState(4);
  const[error,setError] = useState("");
  const[showRules,setShowRules] = useState(true);

  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = ()=>{

    if(!isSelected){
      setError("You have to select a number first.")
      return;
    }
    setError("");

    const random = getRandomArbitrary(1,7);
    setDiceNumber((prev)=> random);
    
    if(random === isSelected)
    {
      setScore((prev) => prev + isSelected);
    } 

    else
    {
      const penalty = -1*(Math.abs(random-isSelected));
      setScore((prev) => prev + penalty);
    }

    setIsSelected(undefined);
  }

  const resetScore = ()=>{
    setScore(0);
  }

  const rulesCall = ()=>{
    setShowRules((prev)=>!prev);
  }

  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore
      score = {score}
      />
      <NumberSelector
      error = {error}
      isSelected = {isSelected}
      setIsSelected = {setIsSelected}
      />
      </div>
      <RoleDIce
      diceNumber = {diceNumber}
      rollDice = {rollDice}
      />
      <div className="butt">
        <button className="button-30"
          onClick={resetScore}>
          Reset Score</button>
        <button className="button-30"
        onClick = {rulesCall}
        >
          {showRules? "Hide" : "Show"} Rules</button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
  
  padding-top: 9px;

  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .butt{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 10px;
  }

.button-30 {
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
}

.button-30:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.button-30:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-30:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}
  
`




