import React from 'react';
import styled from 'styled-components';
import google from '../images/google.png';
import fbk from '../images/fbk.png';
import apple from '../images/apple.png';
import { NavLink } from 'react-router-dom';

function Signup() {
    // const [isClicked, setIsClicked] = useState(false);
    // const signinHandler = () => {
    //     setIsClicked(true);
    // }
    // props.onSave(isClicked);

    return (
        <Main>
            <button className='left'>
                <img src={google} alt='google'/>
                 Continue with Google</button>
            <button className='left'>
                <img src={fbk} alt='fbk'/>
                 Continue with Facebook</button>
            <button className='left'>
                <img src={apple}  alt='left'/>
                Continue with Apple</button>
                <NavLink to="/signuppage">
            <button 
            className='signin'>Sign up with email</button>
            </NavLink>
            <span>By continuing you indicate that you agree to
Peer Stake’s Terms of Service and Privacy Policy.</span>
        </Main>
    )
}
const Main = styled.div`
display: grid;
width: 45%;
padding: 3rem;
grid-gap: 1.2rem;
span{
padding-top: 1rem;
    font-size: 1.2rem;
    color: #8a8a8a;
    width: 90%;
    text-align: left;
}
button {
    height: 4rem;
    border: 1px solid #cfcfcf;
    border-radius: 3px;
    background-color: white;
    font: roboto;
    font-size: 1.5rem;
    cursor: pointer;
    width: 100%;
    img {
        padding: 0 0.9rem;
        height: 2rem;
    }
}
.left {
    text-align: left;
    display: flex;
    align-items: center;
}
button:hover {
    background-color: #f1f1f1;
}

`;
export default Signup