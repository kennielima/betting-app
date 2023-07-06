import React, {Fragment, useContext} from 'react';
import styled from 'styled-components';
import ModalCard from './ModalCard';
import textContext from './ContextProvider';
import Homepage from './Homepage';
// import { CLICK } from './constants';

function Stakes() {
    const {click,dispatch} = useContext(textContext);

    return (
        <Fragment>
            {/* {click === true && <ModalCard onClose={()=>{dispatch({type:'hide'})}} />} */}
        <Homepage>
            <Main>
                <h2>Stakes</h2>
                <Form>
                    <div>
                        <label>I want to stake</label>
                        <label id='add'><span>+</span> Add user</label>
                    </div>
                    <input
                        type="text"
                        placeholder='$100' />
                    <label>With</label>
                    <input
                        type="text"
                        placeholder='I @Jide will win @username/email' />
                    <label>That</label>
                    <input
                        type="text"
                        placeholder='A 3 set FIFA 22 game' />
                    <label>On</label>
                    <input
                        type="text"
                        placeholder='Date/Time' />
                    <label>Decider for dispute resoluion</label>
                    <input
                        type="text"
                        placeholder='Picture of the score board' />
                    <Button>Share</Button>
                </Form>
                <p>Stake With</p>
                <Buttons>
                        <Button onClick={()=>{dispatch({type:'click'})}}>Wallet</Button>
                        <Button onClick={()=>{dispatch({type:'click'})}}>Card</Button>
                    <Button>Bitcoin</Button>
                </Buttons>
            </Main>
        </Homepage>
        </Fragment>
    )
}

const Buttons = styled.div`
display: flex;
gap: 1.5rem;
justify-content: center;
button {
width: 15rem;
}
`;
const Button = styled.button`
    background-color: #7E57C2;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
:hover {
    color: purple;
    background-color: white;
    border: 1px solid purple;
    transition: all 0.3s;
}
;`
const Form = styled.div`
display: grid;
font-weight: bold; 
background-color: #e6e6e6;
height: auto;
width: 75rem;
padding: 2rem;
border-radius: 1rem;
grid-gap: 1rem;
div {
display: flex;
justify-content: space-between;
}
#add {
    color: grey;
    font-weight: 500;
    font-style: italic;
    cursor: pointer;
}
span {
    font-style: none;
    color: purple;
    border: 1px solid purple;
border-radius: 50%;
padding: 0.1rem 0.2rem;
}
label {
    text-align: start;
    font-size: 1.2rem;
}
input {
    height: 3rem;
    width: auto;
    border: none;
    padding-left: 1rem;
}
;`
const Main = styled.div`
margin: 1rem 4rem;
h2 {
    color: #4D2B90;
    text-align: start;
}
p {
    color: #4D2B90;
    text-align: center; 
    font-weight: bold;
}
`
export default Stakes;