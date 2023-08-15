import React, { Fragment,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Homepage from './Homepage';
import textContext from './ContextProvider';
import ModalCard from './ModalCard';

function Home() {
    const { click, dispatch } = useContext(textContext);

    return (
        <Fragment>
        {/* {click === true && <ModalCard onClose={()=>{dispatch({type:'hide'})}} />} */}
        <Homepage>
            <Body>
                <h2>Stakes</h2>
                <Cards>
                    <Card id="one">
                        <h1>5</h1>
                        <span>Running</span>
                    </Card>
                    <Card id="two">
                        <h1>2</h1>
                        <span>Request</span>
                    </Card>
                    <Card id="three">
                        <h1>1</h1>
                        <span>Due</span>
                    </Card>
                </Cards>
                <Buttons>
                        <button onClick={()=>{dispatch({type:'click'})}}><span>+</span> Fund your wallet</button>
                    <NavLink to='/transaction'>
                        <button>View Transactions</button>
                    </NavLink>
                </Buttons>
            </Body>
        </Homepage>
        </Fragment>
    )
}
const Body = styled.div`
display: flex;
flex-direction: column;
margin: 8rem;
grid-gap: 0.1rem;
@media(max-width:480px){
width: 80%;
/* margin: 2rem 1.5rem; */
margin: auto;
padding: 2rem 0;
/* justify-content: center; */
}
h2 {
    color: #4D2B90;
    text-align: start;
    font-size: 2rem;
}
#one {
    color: green;
}
#two {
    color: purple;
}
#three {
    color: red;
}
`;

const Cards = styled.div`
display: flex;
gap: 4rem;
@media(max-width:480px){
    gap: 2rem;
}
`;
const Card = styled.div`
display: flex;
flex-direction: column;
box-shadow: 5px 4px 15px 4px #88888820;
height: 100%;
width: 6rem;
gap: 0;
padding: 1.2rem 4rem;
@media(max-width:480px){
padding: 0.9rem 2rem;
}

h1 {
    font-size: 5rem;
    font-weight: 400;
    margin: 1rem 0;
}
`;
const Buttons = styled.div`
margin: 4rem 2rem 0 2rem;
text-align: start;
display: flex;
justify-content:space-between;

button {
   padding: 1.7rem 5rem;
   border:  1px solid purple;
   border-radius: 1rem;
   cursor: pointer;
    background-color: #4D2B90;
    color: white;
    @media(max-width:480px){
    padding: 1.2rem 1rem;
}
}
button:hover{
    background-color: white;
    color: purple;
    transition: background-color 0.3s;
}
span{
    background-color: white;
    color: purple;
    border:  1px solid purple;
    border-radius: 50%;
    padding:  0.4rem 0.7rem;
}
/* #Btwo {
    background-color: white;
    color: purple;
}
#Btwo:hover{
    color: white;
    background-color: #7E57C2;
    border: 0.1px solid white;
    transition: all 0.3s;
} */
`;
export default Home;