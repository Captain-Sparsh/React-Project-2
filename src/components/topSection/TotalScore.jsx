import {styled } from "styled-components";

const TotalScore = (props) => {
  return (
    <Total>
      <h1>{props.score}</h1>
      <p>Total Score</p>
    </Total>
  )
}

export default TotalScore

const Total = styled.div`
    max-width: 200px;
    text-align: center;

    h1{
        font-size: 100px;
        line-height: 100px;
        font-family: cursive;
    }

    p{
        font-size: 24px;
        font-weight: 500;
    }


`