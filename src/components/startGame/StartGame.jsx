import { styled } from 'styled-components'

const StartGame = (props) => {
  return (
    <Container>
        <div>
        <img src="src\assets\dices 1.png" alt="img" />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={props.toggle}> Play Now</Button>
        </div>
    </Container>
  );


}

export default StartGame


const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
    
    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`

const Button = styled.button`
    

    --b: 3px;   
    --s: .45em; 
    --color: #373B44;
  
    padding: calc(.5em + var(--s)) calc(.9em + var(--s));
    color: var(--color);
    --_p: var(--s);
    background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
    transition: .3s linear, color 0s, background-color 0s;
    outline: var(--b) solid #0000;
    outline-offset: .6em;
    font-size: 20px;

    border: 0;
    cursor: pointer;
    /* user-select: none; */
    /* -webkit-user-select: none; */
    /* touch-action: manipulation; */

    &:hover{
        --_p: 0px;
        outline-color: var(--color);
        outline-offset: .05em;
    }

    &:active{
        background: var(--color);
        color: #fff;
    }
`
