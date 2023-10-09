import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import textContext from '../ContextProvider';
import GoogleLogin from '@leecheuk/react-google-login';
import { gapi } from 'gapi-script';

const clientId = "968109593015-n6eh42djuop0qthote4cvd3vcnn9tpps.apps.googleusercontent.com";

function Signup() {
    const { click2, dispatch2 } = useContext(textContext);
    const ctx = useContext(textContext);

    useEffect(() => {
        function onSignin() {
            gapi.load('auth2', () => {
                gapi.auth2.init({
                    client_id: clientId,
                    scope: ''
                });
            });
        }
    }, []);

    const onFailure = (res) => {
        console.log('failed')
    }

    const onSuccess = (res) => {
        let dname = res.profileObj.givenName;
        let imgurl = res.profileObj.imageUrl;
        ctx.onSignin(dname, '', imgurl)
        ctx.onLogin();
        console.log(res.profileObj);
        console.log(imgurl);
    }

    return (
        <Main className={click2 ? 'hide' : ""}>
            <GoogleLogin
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
            <div className='buttons'>
                <button
                    onClick={() => { dispatch2({ type: 'clicked' }) }}
                    className='login bb'>Login</button>
                <NavLink to="/signuppage" style={{ textDecoration: 'none' }}>
                    <button
                        className='signin bb'>Sign up with email</button>
                </NavLink>
            </div>
            <span className='policy'>By continuing you indicate that you agree to
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
.policy {
    position: absolute;
    bottom: 4rem;
    display: none;
}
}
`;
export default Signup;