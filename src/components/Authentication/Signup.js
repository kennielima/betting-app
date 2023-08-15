import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import google from '../images/google.png';
import fbk from '../images/fbk.png';
import apple from '../images/apple.png';
import { NavLink } from 'react-router-dom';
import textContext from '../ContextProvider';

function Signup() {
    const { click2, dispatch2 } = useContext(textContext);
    const [ dummy, setDummy ] = useState(false);

    return (
        <Main
            className={click2 ? 'hide' : ""}
        >
            <button className='left' onClick={()=>setDummy(true)}>
                <img src={google} alt='google' />
                Continue with Google</button>
            <button className='left' onClick={()=>setDummy(true)}>
                <img src={fbk} alt='fbk' />
                Continue with Facebook</button>
            <button className='left' onClick={()=>setDummy(true)}>
                <img src={apple} alt='left' />
                Continue with Apple</button>
            <div className='buttons'>
                <button
                    onClick={() => { dispatch2({ type: 'clicked' }) }}
                    className='login bb'>Login</button>
                <NavLink to="/signuppage" style={{textDecoration:'none' }}>
                    <button
                        className='signin bb'>Sign up with email</button>
                {dummy && <p style={{color:'red' }}>Please create an account</p>}
                </NavLink>
            </div>
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
.signin {
    background-color: RGB(112 69 198);
    color: white;
}
.signin:hover {
    background-color: #4D2B90;
}
.login {
    display: none;
}
@media(max-width:480px){
    &.hide {
        display: none;
    }
    padding: 0;
    margin: auto;
    margin-top: 20rem;
    width: 85%;
    .left {
    width: 100%;
    }
    .login {
        display: flex;
        background-color: #4D2B90;
        color: white;
    }
    .signin {
        background-color: #4D2B90;
        color: white;
    border: 1px solid white;
    }
.bb {
    width: 16rem;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 3.5rem;
}
.buttons{
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
}
span {display: none}
}
`;
export default Signup;