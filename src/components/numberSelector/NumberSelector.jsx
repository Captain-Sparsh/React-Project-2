import {styled } from "styled-components"

const NumberSelector = (props) => {

  const arr = [1,2,3,4,5,6];

  return (
    <NumberContainer>
      <p className="error_msg">{props.error}</p>
    <div className="boxes">
      {
      arr.map((value,i)=> (
      <Box 
        const isChecked = {value === props.isSelected}
        key = {i}
        onClick = {() => props.setIsSelected(value)}
      >
        {value}
      </Box>
      ))}
    </div>
    <p>Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelector

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
  .error_msg{
    color: red;
    font-family: cursive;
    text-decoration: underline;
    
  }
  .boxes{
    display: flex;
    gap:24px;
  }
  p{
    font-size: 24px;
  }
`
const Box = styled.div`
    
  height: 72px;
  width: 72px;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-family: 'Poppins';
  font-weight: 700;
  border: 2px solid black;
  color: black;
  cursor: pointer;
  background-color: ${(props)=> (props.isChecked) ? "black" : "white"};
  color: ${(props)=> (!props.isChecked) ? "black" : "white"};
  border-color: ${(props)=> (props.isChecked)? "greenyellow": "black"}

`