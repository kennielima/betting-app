import React,{ useContext} from 'react';
import styled from 'styled-components';
import google from '../images/google.png';
import fbk from '../images/fbk.png';
import apple from '../images/apple.png';
import { NavLink } from 'react-router-dom';
import textContext from '../ContextProvider';

function Signup(props) {
    const {dispatch} = useContext(textContext);

    return (
        <Main>
            <button className='left'>
                <img src={google} alt='google' />
                Continue with Google</button>
            <button className='left'>
                <img src={fbk} alt='fbk' />
                Continue with Facebook</button>
            <button className='left'>
                <img src={apple} alt='left' />
                Continue with Apple</button>
            <div className='buttons'>
                <NavLink to="/loginpage" style={{ textDecoration: 'none' }}>
                    <button
                    onClick={()=>{ dispatch({ type:'click'})}}
                        className='login bb'>Login</button>
                </NavLink>
                <NavLink to="/signuppage">
                    <button
                        className='signin bb'>Sign up with email</button>
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
button:hover {
    background-color: #f1f1f1;
}
.login {
    display: none;
}
@media(max-width:480px){
    padding: 0;
    margin: auto;
width: 100%;
    .left {
    width: 100%;
    }
    .login {
        display: flex;
        color: #7E57C2;
    }
    .signin {
        background-color: rgba(0, 0, 0, 0);
        color: white;
    border: 1px solid white;
    }
.bb {
    width: 15rem;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 3.5rem;
}
.buttons{
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
}
span {display: none}
}
`;
export default Signup;