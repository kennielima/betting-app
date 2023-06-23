import React, { useContext } from 'react';
import styled from 'styled-components';
import textContext from '../ContextProvider';
import downloader from '../images/downloader.png';
import logo from '../images/logo.png';
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
                        <img src={logo} alt="logo" />
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
                            <span>@ Peer Stake. 2021</span>
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
`;
const Head = styled.div`
padding: 3rem;
display: flex;
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
`;

const Main = styled.div`
background-image: url(${downloader});
width: 100vw;
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
display: grid;
`;
export default Login;