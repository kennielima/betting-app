import React, { useState, useEffect, useReducer } from 'react';
// import { CLICK } from './constants';
// import { HIDE } from './constants';

const textContext = React.createContext();

export function ContextProvider(props) {
    const [loggedin, setLoggedin] = useState('');
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');

    const reducer = (state, action) => {
        switch (action.type) {
            case 'click':
                return true;
            case 'hide':
                return false;
                case 'clicked':
                    return null;
            default:
                return state;
        }
    };
    const [click, dispatch] = useReducer(reducer, false);

    const reducer2 = (state, action) => {
        switch (action.type) {
            case 'clicked':
                return true;
            case 'hidden':
                return false;
            default:
                return state;
        }
    };
    const [click2, dispatch2] = useReducer(reducer2, false);

    useEffect(() => {
        const storedlog = localStorage.getItem('loggedin');
        const storedName = localStorage.getItem('name');
        const storedEmail = localStorage.getItem('email');

        if (storedlog && storedName && storedEmail) {
            setLoggedin('loggedin');
            setFname(storedName);
            setEmail(storedEmail);
        }
    }, []);

    const onLogin = () => {
        localStorage.setItem('loggedin', 'true');
        setLoggedin('loggedin');
    }
    const onSignin = (fname, email) => {
        localStorage.setItem('loggedin', 'true');
        setLoggedin('signedin');
        setEmail(email);
        setFname(fname);
        localStorage.setItem('name', fname);
        localStorage.setItem('email', email);

    }
    const onLogout = () => {
        // localStorage.removeItem('loggedin', '01');
        setLoggedin('loggedout');
    }

    return (
        <textContext.Provider value={{
            loggedin,
            onLogin, onLogout, onSignin,
            email, fname,
            click, dispatch,
            click2, dispatch2
        }}>
            {props.children}
        </textContext.Provider>
    )
}

export default textContext;