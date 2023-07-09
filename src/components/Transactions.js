import React, { Fragment } from 'react';
import Homepage from './Homepage';
import styled from 'styled-components';
import Polygon1 from './images/Polygon1.png';
import Polygon from './images/Polygon.png';

const TRANSACTIONS = [
    {
        logo: <img src={Polygon} alt=''/>,
        title: 'Deposit',
        desc: 'A 3 set FIFA 22 game againts Mathew',
        price: <span className='price'>$100</span>
    },
    {
        logo: <img className='red' src={Polygon1} alt=''/>,
        title: 'Withdrawal',
        desc: 'Who Can Peel Boiled Eggs Faster againts Bode',
        price: <span className='redp'>$80</span>
    },
    {
        logo: <img src={Polygon} alt=''/>,
        title: 'Won',
        desc: 'A 3 set PES 2019 game againts Dimeji',
        price: <span className='price'>$500</span>
    },
    {
        logo: <img src={Polygon} alt=''/>,
        title: 'Deposit',
        desc: 'Who will win staff of the month againts Jamiu',
        price: <span className='price'>$150</span>
    },
    {
        logo: <img className='red' src={Polygon1} alt=''/>,
        title: 'Funded',
        desc: 'Top fabric sales againts Sandra',
        price: <span className='redp'>$100</span>
    },
    {
        logo: <img src={Polygon} alt=''/>,
        title: 'Won',
        desc: 'A 3 set PES 2019 game againts Dimeji',
        price: <span className='price'>$250</span>
    },
    {
        logo: <img src={Polygon} alt=''/>,
        title: 'Deposit',
        desc: 'Top fabric sales againts Sandra',
        price: <span className='price'>$800</span>
    }
]
function Transactions() {
    return (
        <Fragment>
            <Homepage>
                <Main>
                <Buttons>
                    <button><span>+</span> Fund your wallet</button>
                    <button>Withdraw</button>
                </Buttons>
                <Head>
                    <h2>Transactions</h2>
                    <button>search</button>
                </Head>
                <List>
                    {TRANSACTIONS.map((each)=> (
                       <li>
                        {each.logo}
                        <div id='title'>
                            <p>{each.title}</p>
                            <span id='desc'>{each.desc}</span>
                        </div>
                        {each.price}
                       </li> 
                    ))}
                    <p id='seeall'>See all</p>
                </List>
                </Main>
            </Homepage>
        </Fragment>
    )
}
const List = styled.ul`
display: grid;
font-weight: bold; 
background-color: #e6e6e6;
height: auto;
width: 75rem;
padding: 0rem 0.6rem;
border-radius: 1rem;
@media(max-width:480px){
width: auto;
}
li {
display: flex;
align-items: center;
}

img {
display: flex;
align-items: center;
justify-content: center;
background-color: #bce0cb;
border-radius: 0.5rem;
height: 1rem;
width: 1rem;
padding: 0.9rem;
margin: 1.3rem 3rem 0rem 1.2rem; 
@media(max-width:480px){
    margin: 0.3rem 0.8rem 0.3rem 0.3rem;
}
}
.red {
    background-color: #f7bcbb;
}
.redp {
    color: #eb5756;
}
.price {
color: green;
}
.price,.redp {
font-size: 1.4rem;
width: 10%;
}
#title{
display: grid;
width: 80%;
text-align: start;
grid-gap: 0rem;
@media(max-width:480px){
        width: 75%;
    }
}
p {
font-size: 1.4rem;
    font-weight: 600;
}
#desc {
    font-size: 1.1rem;
    font-weight: 400;
color: grey;
font-style: italic;
margin-top: -0.9rem;
}
#seeall {
    font-size: 1.1rem;
font-style: italic;
color: #7E57C2;
cursor: pointer;
}

`;
const Head = styled.div`
display: flex;
justify-content: space-between;
color: #4D2B90;
margin: -0.2rem;
align-items: center;
@media(max-width:480px){
    padding: 0rem 1.5rem;
}
button {
color: #4D2B90;
border: 1px solid grey;
border-radius: 5rem;
padding: 0rem 1rem;
font-size: 1.1rem;
height: 2.5rem;
}
button:hover{
    background-color: #4D2B90;
    color: white;
    border: none;
    transition: background-color 0.3s;
}
`;
const Main = styled.div`
padding: 2.2rem 4rem;
@media(max-width:480px){
    padding: 1rem 0rem;
}
`;
const Buttons = styled.div`
margin-left: 40rem;
@media(max-width:480px){
margin: auto;
}
span {
    color: white;
    border: 1px solid white;
border-radius: 50%;
padding: 0 0.3rem;
}

button {
   padding: 1rem 2.5rem;
   border:  1px solid purple;
   border-radius: 0.5rem;
   cursor: pointer;
    background-color: #4D2B90;
    color: white;
    margin: 0.5rem;
    width: 17rem;
    @media(max-width:480px){
width: 14rem;
padding: 1rem;
}
}
button:hover{
    background-color: white;
    color: purple;
    transition: background-color 0.3s;
    span {
        color: purple;
    border: 1px solid purple;
    }
}
`;
export default Transactions;