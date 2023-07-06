import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import textContext from '../ContextProvider';
import downloader from '../images/downloader.png';
import logo from '../images/logo.png';
import peerstake from '../images/peerstake.png';
import untitled from '../images/untitled.png';
import Loginpage from './Loginpage';
import Signup from './Signup';
import { motion } from 'framer-motion';
import Home from '../Home';

function Login() {
    const ctx = useContext(textContext);

    return (
        <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{ duration: 0.5 }}
        >
            {ctx.loggedin !== 'loggedin' &&
                <Main>
                    <Main2>
                        <img id='logo' src={logo} alt="logo" />
                        <img id='ps' src={peerstake} alt="peerstake" />
                        <Head>
                            <Signup />
                            <Loginpage />
                        </Head>
                        <Footer>
                            <span>About</span>
                            <span>Privacy</span>
                            <span>Terms</span>
                            <span>Contact us </span>
                            <span>Jobs</span>
                            <span>Legal</span>
                            <span id='peer'>@ Peer Stake. 2021</span>
                        </Footer>
                    </Main2>
                </Main>
            }
            {ctx.loggedin === 'loggedin' && <Home />}
        </motion.div>
    )
};


const Main2 = styled.div`
background-color: #f1f1f1;
width: 60%;
height: auto;
margin: auto;
padding-top: 3rem;
border-radius: 3px;
#ps {
    display: none;
}
@media(max-width:480px){
backdrop-filter: blur(100%);
background-color: rgba(0, 0, 0, 0);
margin: auto;
width: 99%;
/* display: grid;
justify-content: center; */
#ps {
    display: flex;
    margin-left: 2rem;
    position: absolute;
    top: 2rem;
    /* margin-top: 0rem; */
}
#logo {
    display: none;
}
}
`;
const Head = styled.div`
padding: 3rem;
display: flex;
@media(max-width: 480px){
    position: absolute;
bottom: 8%;
padding: none;
}
`;
const Footer = styled.footer`
background-color: #E2E2E2;
padding: 1.5rem;
border-radius: 0 0 3px 3px;
display: flex;
gap: 1rem;
justify-content: center;
color: grey;
cursor: pointer;
@media(max-width: 480px){
background-color: rgba(0, 0, 0, 0);
position: absolute;
bottom: 0;
 left: 48%;
 transform: translate(-50%, -50%);

span {display: none;}
#peer {
    display: flex;
    color: white;
    font-size: 1.4rem;
}
}
`;

const Main = styled.div`
background-image: url(${downloader});
width: 100vw;
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
display: grid;
@media(max-width: 480px){
background-image: url(${untitled});
/* background: linear-gradient(to top, #442385, rgba(0, 0, 0, 0)), url(${downloader}); */
}
`;
export default Login;