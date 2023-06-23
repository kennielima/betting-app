import React, { Fragment, useContext } from 'react'
import logo from './images/logo.png';
import user from './images/user.png';
import styled from 'styled-components';
import textContext from './ContextProvider';
import { NavLink } from 'react-router-dom';
import ModalCard from './ModalCard';

function Header() {
    const { fname, onLogout,click, dispatch } = useContext(textContext);

    return (
        <Fragment>
            {click === true && <ModalCard onClose={() => { dispatch({ type: 'hide' }) }} />}
            <Main>
                <img className='logo' src={logo} alt="logo" />
                <div>
                    <NavLinks to='/'>
                        <span>Home</span>
                    </NavLinks>
                    <span>About</span>
                    <NavLinks to='/stakes'>
                        <span>Stakes</span>
                    </NavLinks>
                    <span 
                    onClick={() => { dispatch({ type: 'click' }) }}
                    >Wallet</span>
                    <NavLinks to='/transaction'>
                        <span>Transactions</span>
                    </NavLinks>
                    <span>Contact Us</span>
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
        </Fragment>
    )
}
const NavLinks = styled(NavLink)`
            text-decoration: none;
            color: #7E57C2;
            `;
const Main = styled.header`
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
            /* height: 7vh; */
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
}
            button:hover {
                background - color: #4D2B90;
            transition: all 0.3s;
}
            `;
export default Header;