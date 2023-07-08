import styled from 'styled-components'

const Rules = (props) => {
  return (    
    <RulesContainer>
      <h2>How to play the game</h2>
      <div className="text">
        <ul>
        <li><p>First select a number</p></li>
        <li><p>Click on the dice</p></li>
        <li><p>If the dice shows your selected number, you get positive points 
            equal to your selected number.
        </p></li>
        <li><p>If the dice shows a different number, then a penalty of
            <span className='abs'> |Selected_Number - Dice_Number| </span>
            is taken from your score.
        </p></li>
        <li><p>|x| means absolute value.</p></li>
        </ul>
      </div>
    </RulesContainer>

  )
}

export default Rules

const RulesContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 10px;
    
    align-items: center;
    font-family: 'Poppins';
    max-width: 70vw;
    margin: 0 auto;
    margin-top: 15px;
    padding: 12px;
    background-color: #fbf1f1;
    border-radius: 10px;
    font-weight: 500;
  h2 {
    font-size: 24px;
  }

  .abs{
    font-weight: 800;
    color: red;
  }

`