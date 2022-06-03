import React from 'react';
import { Routes, Route }
  from 'react-router-dom';
import { BuyPage } from './components/Buy/buyPage';
import { Contact } from './components/Contact/contact';
import  Sell  from './components/Sell/sell';
import Home from './components/home';
import AddHouse from './components/admin';
import HousesTable from './components/admin/HouseTable';
import { BasicTable } from './components/table';
import Registration from './components/login/index';
import SignInSide from './components/signIn/index'
import SignUp from './components/signUp/index';

function App() {
  return (
    <>       
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='pages/Buy' element={<BuyPage />} />
          <Route path='pages/Sell' element={<AddHouse />} />
          <Route path='houseTable' element={<BasicTable />} />
          {/* <Route path='search/:location' element={<BuyPage />} /> */}
          <Route path='pages/Contact' element={<SignInSide />} />
        </Routes>
    </>
  );
}

export default App;


