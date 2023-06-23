import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import textContext from '../ContextProvider';
import downloader from '../images/downloader.png';

function Signuppage() {
    const [evalue, setEvalue] = useState('');
    const [fvalue, setFvalue] = useState('');
    const [lvalue, setLvalue] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const inputRef = useRef();
    const ctx = useContext(textContext);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        let currentValidity = (fvalue === '' || lvalue === '' || !evalue.includes('@')) ? false : true;

        if (currentValidity === true && isChecked === true) {
            ctx.onSignin(fvalue, evalue);
            navigate('/');
        } else {
            inputRef.current.focus();
        }
        console.log(isChecked);
    }
    return (
        <Main>
            <Main2>
                <h2>Sign up</h2>
                <Form onSubmit={submitHandler}>
                    <Divs id="one">
                        <label htmlFor='name'>First Name</label>
                        <input
                            type="name"
                            placeholder="First Name"
                            value={fvalue}
                            ref={inputRef}
                            onChange={(e) => setFvalue(e.target.value)}
                        />
                    </Divs>
                    <Divs id="two">
                        <label htmlFor='name'>Last Name</label>
                        <input
                            type="name"
                            placeholder="Last Name"
                            value={lvalue}
                            ref={inputRef}
                            onChange={(e) => setLvalue(e.target.value)}
                        />
                    </Divs>
                    <Divs id="three">
                        <label htmlFor='email'>Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={evalue}
                            ref={inputRef}
                            onChange={(e) => setEvalue(e.target.value)}
                        />
                    </Divs>
                    <Divs id="four">
                        <label>Gender<span>(optional)</span></label>
                        <select>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='Transgender'>Transgender</option>
                        </select>
                    </Divs>
                    <Divs id="five">
                        <label htmlFor='date'>Date</label>
                        <Flexdiv>
                            <select placeholder="gender">
                                <option value='January'>January</option>
                                <option value='February'>February</option>
                                <option value='March'>March</option>
                                <option value='April'>April</option>
                                <option value='May'>May</option>
                                <option value='June'>June</option>
                                <option value='July'>July</option>
                                <option value='August'>August</option>
                                <option value='September'>September</option>
                                <option value='October'>October</option>
                                <option value='November'>November</option>
                                <option value='December'>December</option>
                            </select>
                            <input
                                placeholder="day"
                                type="number"
                                min="1"
                                max="30"
                            />
                            <input
                                placeholder="Year"
                                type="number"
                                min="1950"
                                max="2005"
                            />
                        </Flexdiv>
                    </Divs>
                    <TnCs id="six">
                        <div>
                            <input 
                            type="checkbox" 
                            checked={isChecked} 
                            onChange={(e)=> setIsChecked(e.target.checked)}
                            />
                            <span className={!isChecked ? 'unchecked' : ''}>Please confirm to our Terms and Conditions.</span>
                        </div>
                        <button onSubmit={submitHandler}>Signup</button>
                    </TnCs>
                </Form>
            </Main2>
        </Main>
    )
}
const Main = styled.div`
background-image: url(${downloader});
width: 100vw;
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
display: grid;
`;
const Main2 = styled.div`
background-color: #E6E6E6;
width: 60%;
height: auto;
margin: auto;
padding-top: 3rem;
border-radius: 3px;
border: 2rem solid grey;
`;
const Form = styled.form`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 3rem;
margin: 3rem;
input {
    height: 3.2rem;
    border: 1px solid #cfcfcf;
}
select {
    height: 3.7rem;
    border: 1px solid #cccccc;
}
label {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: start;
}
#one {
    grid-column-start: 1;
    grid-column-end: 3;
}
#two {
    grid-column-start: 3;
    grid-column-end: 5;
}
#three {
    grid-column-start: 1;
    grid-column-end: 5;
}
#four {
    grid-column-start: 1;
    grid-column-end: 3;
    span{
        font-style: italic;
        font-weight: 400;
        color: grey;
    }
}
#five {
    grid-column-start: 3;
    grid-column-end: 5;
}
#six {
    grid-column-start: 1;
    grid-column-end: 5;   
}
`;
const Divs = styled.div`
display: grid;
grid-gap: 1rem;
`;
const Flexdiv = styled.div`
display: grid;
grid-auto-flow: column;
grid-gap: 1.5rem;
 `;
const TnCs = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
.unchecked {
    color: red;
}
div {
display: flex;
align-items: center;
span {
    color: gray;
}
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
}
`;
export default Signuppage;