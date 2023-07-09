import React from 'react';
import logowhite from './images/logowhite.png';
import styled from 'styled-components';

function Footer() {
    return (
        <Main>
            <img src={logowhite} alt="logowhite" />
            <div>
                <span>About Us</span>
                <span>Contact Us</span>
                <span>Customer Support</span>
                <span>Jobs</span>
                <span>Legal</span>
            </div>
            <div>@ Peer Stake. 2021</div>
        </Main>
    )
}
const Main = styled.div`
/* height: 30%; */
background-color: #7E57C2;
display: grid;
grid-gap: 1rem;
justify-content: center;
color: white;
padding: 1rem;
span {
    padding: 0 1rem;
}
img{
    padding-left: 10rem;
    height: 15vh;
@media(max-width:480px){
    height: 8vh;
    padding-left: 13.5rem;
}
}
`;
export default Footer;