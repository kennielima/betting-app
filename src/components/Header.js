import React, { Fragment, useContext, useState } from 'react'
import logo from './images/logo.png';
import user from './images/user.png';
import styled from 'styled-components';
import textContext from './ContextProvider';
import { NavLink } from 'react-router-dom';
import ModalCard from './ModalCard';
import peerstake from './images/peerstake.png';

function Header() {
    const { fname, onLogout, click, dispatch } = useContext(textContext);
    const [toggle, setToggle] = useState(false);

    const HandleToggle = () => {
        setToggle(!toggle);
    }
    const dispatchModal = () => {
        dispatch({ type: 'click' })
        setToggle(false);
    }

    return (
        <Fragment>
            {click === true && <ModalCard onClose={() => { dispatch({ type: 'hide' }) }} />}
            <Main className={toggle ? 'navopen' : ''}>
                <img className='logo' src={logo} alt="logo" />
                <div>
                    <NavLinks to='/'>
                        <span onClick={()=>setToggle(false)}>Home</span>
                    </NavLinks>
                    <NavLinks to='/stakes'>
                        <span onClick={()=>setToggle(false)}>Stakes</span>
                    </NavLinks>
                    <span onClick={dispatchModal}>Wallet</span>
                    <NavLinks to='/transaction'>
                        <span onClick={()=>setToggle(false)}>Transactions</span>
                    </NavLinks>
                </div>
                <div>
                    <img className='user' src={user} alt="user" />
                    <p>@{fname}</p>
                    <NavLink to='/'>
                        <button
                            onClick={onLogout}
                        >Logout</button>
                    </NavLink>
                </div>

            </Main>
            <Media className={toggle ? 'navopen' : ''}>
                <img id='ps' src={peerstake} alt="peerstake" />
                <button onClick={HandleToggle}>&#9776;</button>
            </Media>
        </Fragment>
    )
}
const Media = styled.div`
display: none;
@media(max-width:480px){
    display: flex;
    position: absolute;
    justify-content: space-between;
    /* gap: 20rem; */
    width: 100%;
    /* margin: auto; */
    padding: 1rem 0;
button {
        background-color: #7e57c2;
        color: white;
        border: none;
        font-size: 3rem;
    }
}
`;
const NavLinks = styled(NavLink)`
            text-decoration: none;
            color: #7E57C2;
@media(max-width:480px){
    color: white;
}
`;
const Main = styled.header`
@media(max-width:480px){
    visibility: hidden;
    flex-direction: column;
        background-color: rgba(123, 120, 120, 0.932);
        padding: 1.5rem 0;
        position: absolute;
        top: 5rem;
        width: 100%;
        align-items: center;
        border-radius: 1rem;
    margin: auto;
    div {
        gap: 2rem;
        flex-direction: column;
        color: white;
    }
    img, p {
        display: none;
    }
    &.navopen {
        visibility: visible;
    flex-direction: column;
    }
}
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10rem;
color: #7E57C2;
font-weight: 500;
font-size: 1.4rem;
box-shadow: 5px 4px 15px 4px #88888820;
z-index: 15;
background-color: white;
.user {
height: 3rem;
width: 3rem;
border-radius: 50%;
}
.logo {
    height: 3rem;
}
div{
    display: flex;
    align-items: center;
}
span {
    padding: 2rem 3.5rem;
    cursor: pointer;
}
span:hover{
    transition: all 0.3s;
    color: #4D2B90;
}
button {
    margin-left: 2rem;
    background-color: #7E57C2;
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 1.5rem;
    cursor: pointer;
@media(max-width:480px){
margin: auto;
margin-top: 2.5rem;
}
}
button:hover {
    background-color: #4D2B90;
    transition: all 0.3s;
}
`;
export default Header;