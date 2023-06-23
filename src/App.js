import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/Pages';
import textContext from './components/ContextProvider';
import Header from './components/Header';

function App() {
  const { loggedin } = useContext(textContext);
  return (
    <div className="App">
      <BrowserRouter>
      {loggedin === 'loggedin' && <Header />}
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
