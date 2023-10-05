import React,{ useContext } from 'react';
import user from './images/user.png';
import styled from 'styled-components';
import Peericon from './images/Peericon.png';
import vectordols from './images/vectordols.png';
import textContext from './ContextProvider';
import { NavLink } from 'react-router-dom';

function Profile() {
    const { fname } = useContext(textContext);

  return (
    <Main>
        <img className="vector" src={Peericon} alt="Peericon" />
        <p className="welcome" >{fname.toUpperCase()}</p>
        <img className="user" src={user} alt="user" />
        <h1>$0.00</h1>
        <p id='wallet'>WALLET BALANCE</p>
        <NavLink to='/stakes'>
        <button>CREATE STAKE</button>
        </NavLink>
        <img className="vectordols" src={vectordols} alt="vectordols" />
    </Main>
  )
}
const Main = styled.div`
background-color: #7E57C2;
color: white;
padding: 6rem;
width: 20%;
@media(max-width:480px){
width: 100vw;
padding: 3rem 0 3rem 0;
border-radius: 0 0 3rem 3rem;
h1 {
    margin: 0;
}
}
.user {
    border-radius: 50%;
background-color: white;
position: relative;
}
.welcome {
position: relative;
font-size: 2rem;
font-weight: 500;
}
#wallet {
font-size: 1.2rem;
}
.vector {
    position: absolute;
    left: 14rem;
    top: 5.7rem;
    z-index: 0;
    height: 15rem;
    @media(max-width:480px){
        left: 0rem;
    top: 5.7rem;
    }
}
.vectordols {
    position: absolute;
    left: 35.7rem;
    bottom: 20rem;
    z-index: 0;
    height: 9rem;
    opacity: 40%;
    color: white;
    @media(max-width:480px){
        left: 23rem;
    top: 30rem;
    }
}
button {
background-color: white;
color: #7E57C2;
border: none;
border-radius: 0.5rem;
padding: 1rem 2rem;
position: relative;
z-index: 10;
}
button:hover {
    background-color: #7E57C2;
    color: white;
    border: 1px solid white;
    cursor: pointer;
    transition: background-color 0.3s;
}
h1 {
font-size: 5rem;
font-weight: 800;
}

`;
export default Profile;