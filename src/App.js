import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/home';
import Aboutscreen from './screens/about';
import DestinationScreen from './screens/destination';
import HotelScreen from './screens/hotel';
import ContactScreen from './screens/contact';

import PageNotFoundScreen from './screens/page-not-found';

import "./css/flaticon.css";
import "./css/style.css";

const App = () => {
  return (
  <BrowserRouter>
   <Routes>
    <Route path="" element={<HomeScreen></HomeScreen>}></Route>
    <Route path='about' element={<Aboutscreen></Aboutscreen>}></Route>
    <Route path='destination' element={<DestinationScreen></DestinationScreen>}></Route>
    <Route path='hotel' element={<HotelScreen></HotelScreen>}></Route>
    <Route path='contact' element={<ContactScreen></ContactScreen>}></Route>

    <Route path='*' element={<PageNotFoundScreen></PageNotFoundScreen>}></Route>
   </Routes>
  </BrowserRouter>
  );
};

export default App;