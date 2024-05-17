import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Component/free-user/Layout';
import Login from './Component/free-user/Login';
import Logout from './Component/free-user/Logout';
import Signup from './Component/free-user/Signup';
import Nopage from './Component/free-user/Nopage';
import Predict from './Component/login-user/Predict';
import BuyPredict from './Component/login-user/BuyPredict';

import BudgetHomes from './Component/buy/BudgetHomes'
import PremiumHomes from './Component/buy/PremiumHomes'
import ReadyToMove from './Component/buy/ReadyToMove'
import FurnishedProperty from './Component/buy/FurnishedProperty';

import BachelorFriendly from './Component/rent/BachelorFriendly';
import BudgetFriendly from './Component/rent/BudgetFriendly';
import FurnishedHomes from './Component/rent/FurnishedHomes';

import Selling from './Component/sell/Selling';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/predict' element={<Predict />} />
          <Route path='/buypredict' element={<BuyPredict />} />
          <Route path='/budgethomes' element={<BudgetHomes />} />
          <Route path='/furnishedproperty' element={<FurnishedProperty />} />
          <Route path='/premiumhomes' element={<PremiumHomes />} />
          <Route path='/readytomove' element={<ReadyToMove />} />

          <Route path='/budgetfriendly' element={<BudgetFriendly />} />
          <Route path='/furnishedhomes' element={<FurnishedHomes />} />
          <Route path='/bachelorfriendly' element={<BachelorFriendly />} />

          <Route path='/selling' element={<Selling />} />
          
          <Route path='*' element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>   
  )
}

export default App;

