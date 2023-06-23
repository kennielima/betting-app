import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Profile from './Profile';
import { motion } from 'framer-motion';

function Homepage(props) {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Main>
                 <Profile />
                {props.children}
            </Main>
            <Footer />
        </motion.div>
    )
}

const Main = styled.div`
display: flex;
margin: 0 12rem;
background-color: #f2f2f2;
height: auto;
`;

export default Homepage;