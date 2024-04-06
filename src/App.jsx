import './App.css'
import Login from './components/Login';
import Verify from './components/Verify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catering from './components/Catering';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Requirement from './components/Requirement';
import Hotels from './components/Hotels';
import Gatherings from './components/Gatherings';
import React from 'react';
import HotelView from './components/HotelView';
import HSearch from './components/HSearch';
import TCatering from './components/TCatering';
import FForm from './components/FForm';
import AdCreate from './components/AdCreate';
import AdHotels from './components/AdHotels';
import CreateProfile from './components/CreateProfile';
function App() {

  return (
    <>
      {/* <Nav /> */}
      {/* <Router> */}
        <Nav />
        <Routes>
          <Route path='/login' element={<Login />} > </Route>
          <Route path='/CProfile' element={<CreateProfile />} > </Route>
          <Route path='/HSearch' element={<HSearch />} > </Route>
          <Route path='/requirement' element={<Requirement />} > </Route>
          <Route path='/gathering' element={<Gatherings />} > </Route>

          <Route path='/catering' element={<Catering />} > </Route>
          <Route path='/tcatering' element={<TCatering />} > </Route>
          {/* <Route path='/verify' element={<Verify />} > </Route> */}
          <Route path='/hotels' element={<Hotels />} > </Route>
          <Route path='/hotelView' element={<HotelView />} > </Route>
          <Route path='/fform' element={<FForm />} > </Route>
          <Route path='/admin_create' element={<AdCreate />} > </Route>
          <Route path='/admin_hotels' element={<AdHotels />} > </Route>

        </Routes>
        <Footer />
      {/* </Router> */}
    </>
  )
}

export default App
