import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import textContext from '../ContextProvider';

function Loginpage(props) {
    const [evalue, setEvalue] = useState('');
    const [pvalue, setPvalue] = useState('');
    const pRef = useRef();
    const eRef = useRef();
    const ctx = useContext(textContext);
    const [wrongEmail, setWrongEmail] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        let currentValidity = (pvalue === '' || evalue === '' || !evalue.includes('@')) ? false : true;

        if (currentValidity === true && evalue === ctx.email) {
            ctx.onLogin(evalue, pvalue);
        } 
        else if (pvalue === "") {
            pRef.current.focus();
        } 
        else if (!(evalue).includes('@') || evalue === "") {
            eRef.current.focus();
            setWrongEmail(<span className='wrongEmail'>input a valid email address</span>)
        } 
        else if (currentValidity === true && evalue !== ctx.email) {
            eRef.current.focus();
            setWrongEmail(<span className='wrongEmail'>You do not have an account. Sign up now?</span>)
        }
    }

    return (
        <Form onSubmit={submitHandler} className={ ctx.click ? "displayed": "hidden"}
        // id={clicked && 'clicked'}
        >
            <p>Login to Peer Stake</p>
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                placeholder='Your email'
                onChange={(e) => setEvalue(e.target.value)}
                ref={eRef}
                value={evalue}
            />
            {wrongEmail}
            <label>Password</label>
            <input
                type="password"
                placeholder='Your password'
                onChange={(e) => setPvalue(e.target.value)}
                ref={pRef}
                value={pvalue}
            />
            <Forgot>
                <span>Forgot Password?</span>
                <button onClick={submitHandler}>Log in</button>
            </Forgot>
        </Form>
    )
}
const Form = styled.form`
.wrongEmail {
    color: red;
    text-align: left;
    font-size: 1.1rem;
}
display: grid;
width: 45%;
padding: 0 3rem;
p {
    font-size: 1.5rem;
    text-align: left;
    font-weight: 600;
}
input {
    height: 4rem;
    border: 1px solid #cfcfcf;
    border-radius: 3px;
    font-size: 1.5rem;
    cursor: pointer;
    color: #8a8a8a;
    padding-left: 1rem;

}
label{
    font-size: 1.5rem;
    text-align: left;
    font-weight: 500;
}
@media(max-width:480px){
    .hidden{
        display: none;
    }

    .displayed{
        display: flex;
    }

/* visibility: hidden; */
/* #clicked {
display: flex;
} */
}
`;
const Forgot = styled.div`
height: 4rem;
display: flex;
justify-content: space-between;
align-items: center;

span{
    color: #8a8a8a;
    cursor: pointer;
}
button {
    padding: 1.3rem 2.5rem;
    font-size: 1.5rem;
    color: white;
    background-color: RGB(112 69 198);
    border-radius: 3px;
    border: none;
cursor: pointer;
}
button:hover {
    background-color: #4D2B90;
    transition: all 0.3s;
}
`;

export default Loginpage;