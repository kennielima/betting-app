import React from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import appleVector from './images/appleVector.png';
import visaa from './images/visaa.png';
import mastercard from './images/mastercard.png';
import americanxprs from './images/americanxprs.png';
import discover from './images/discover.png';

function ModalCard(props) {
    const submitHandler = (e) => {
        e.preventDefault();
        
    }
    return (
        <Modal onClose={props.onClose} >
            <Main>
                <Pay>
                    <img src={appleVector} alt="apple" />
                    <span>Pay</span>
                </Pay>
                <Line>
                    <hr></hr>
                    <span> or pay with card </span>
                    <hr></hr>
                </Line>
                <Logo>
                    <img className='visa' src={visaa} alt="visaa" />
                    <img src={mastercard} alt="mastercard" />
                    <img className='xprs' src={americanxprs} alt="americanxprs" />
                    <img src={discover} alt="discover" />
                </Logo>
                <h3>Card Information</h3>
                <Form onSubmit={submitHandler}>
                    <label>Full Name</label>
                    <input
                        type='name'
                        placeholder='Name on Card'
                    />
                    <label>Card Number</label>
                    <input
                        type='text'
                        placeholder='xxxx xxxx xxxx xxxx'
                    />
                    <Flex>
                        <div>
                            <label>Expiration Date</label>
                            <input
                                type='text'
                                placeholder='MM/YY'
                            />
                        </div>
                        <div>
                            <label>CVC Number</label>
                            <input
                                type='text'
                                placeholder='cvc'
                            />
                        </div>
                    </Flex>
                    <Flex>
                        <div>
                            <label>Country/Region</label>
                            <input
                                type='text'
                                placeholder='United States'
                            />
                        </div>
                        <div>
                            <label>Zip Code</label>
                            <input
                                type='text'
                                placeholder='Your zip code'
                            />
                        </div>
                    </Flex>
                    <Check>
                    <label>Save this Card</label>
                    <input type="checkbox" />
                    </Check>
                    <Button> Pay $100 </Button>
                </Form>
            </Main>
        </Modal>
    )
}
const Button = styled.button`
    background-color: #7E57C2;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
:hover {
    color: purple;
    background-color: white;
    border: 1px solid purple;
    transition: all 0.3s;
}
`;
const Form = styled.form`
display: grid;
grid-gap: 1rem;
input {
border-radius: 0.5rem;
border: 1px solid #E5E5E5;
padding: 0.5rem;
opacity:0.8;
}
`;
const Check = styled.div`
    display: flex;
align-items: center;
color: #A695C8;
padding-left: 1rem;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    /* gap: 1rem; */
    align-items: center;
    div {
    display: grid;
    align-items: center;
    gap: 1rem;
    }
    input {
        width: 32rem;
    }
`;
const Main = styled.div`
display: grid;
grid-gap: 1.2rem;
padding: 2rem;
width: auto;
h3 {
display: flex;
justify-content: center;
/* padding: 1rem; */
}
`;
const Logo = styled.div`
display: flex;
gap: 0.5rem;
justify-content: center;
.visa {
    border: 1px solid #DEDEDE;
    padding: 0.3rem;
}
.xprs {
    border: 1px solid #036dd0;
    background-color: #036dd0;
    padding: 0 0.3rem;
}
`;
const Line = styled.div`
color: grey;
display: flex;
/* padding: 1.3rem 0; */
hr{
    width: 39%;
}
`;
const Pay = styled.div`
background-color: black;
color: white;
padding: 1rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.4rem;
font-weight: 500;
border-radius: 0.5rem;
span{
    padding: 0.3rem;
}
`;
export default ModalCard;