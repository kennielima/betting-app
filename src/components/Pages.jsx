import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login';
import Signuppage from './Authentication/Signuppage';
import Stakes from './Stakes';
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import Card from './ModalCard';
import Transactions from './Transactions';

function Pages() {
  return (
    <AnimatePresence mode='wait'>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signuppage' element={<Signuppage />} />
        <Route path='/homepage' element={<Home />} />
        <Route path='/stakes' element={<Stakes />} />
        <Route path='/payment' element={<Card />} />
        <Route path='/transaction' element={<Transactions />} />
    </Routes>
    </AnimatePresence>
  )
}

export default Pages;