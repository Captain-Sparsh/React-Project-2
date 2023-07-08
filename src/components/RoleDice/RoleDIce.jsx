import styled from 'styled-components'

const RoleDIce = (props) => {

  return (
    <DiceContainer>
      <div className='dice' onClick={props.rollDice}>
        <img src = {`src/assets/dice_${props.diceNumber}.png`} alt= "dice 4" />
      </div>
      <p>Click on the Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDIce

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
    
    .dice{
        cursor: pointer;
    }

    p{
        font-size: 22px;
        font-family: 'Poppins';
        font-weight: 500;
    }
`